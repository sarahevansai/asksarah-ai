import { NextRequest, NextResponse } from 'next/server'

const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY
const ELEVEN_LABS_KEY = process.env.ELEVEN_LABS_API_KEY
const VOICE_ID = 'h3uu3GFt1Rdw0QJ5' // Sarah's voice

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    // Call Claude API
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': CLAUDE_API_KEY!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        system: `You are Sarah Evans, an AI visibility expert. You help people understand how their websites appear to AI models like ChatGPT, Perplexity, and Google's AI overviews. You're knowledgeable, direct, and practical. Keep responses concise (1-2 sentences) for chat context. Your goal is to help visitors improve their AI visibility score.`,
        messages: [
          ...conversationHistory,
          { role: 'user', content: message }
        ]
      })
    })

    if (!claudeResponse.ok) {
      throw new Error(`Claude API error: ${claudeResponse.status}`)
    }

    const claudeData = await claudeResponse.json()
    const responseText = claudeData.content[0].text

    // Generate audio via ElevenLabs
    let audioUrl = null
    try {
      const audioResponse = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': ELEVEN_LABS_KEY!,
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            text: responseText,
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75
            }
          })
        }
      )

      if (audioResponse.ok) {
        const audioBuffer = await audioResponse.arrayBuffer()
        const base64Audio = Buffer.from(audioBuffer).toString('base64')
        audioUrl = `data:audio/mpeg;base64,${base64Audio}`
      }
    } catch (audioError) {
      console.error('ElevenLabs error:', audioError)
      // Continue without audio
    }

    return NextResponse.json({
      message: responseText,
      audioUrl
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
