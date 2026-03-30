'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageCircle, ChevronDown } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'sarah'
  timestamp: Date
}

interface QAItem {
  id: number
  question: string
  answer: string
}

const qaData: QAItem[] = [
  {
    id: 1,
    question: "What is AI visibility and why does it matter?",
    answer: "AI visibility is whether your brand shows up when someone asks ChatGPT, Perplexity, Gemini, or any AI model a question you should be the answer to.\n\nPeople aren't just Googling anymore. They're asking AI engines direct questions and getting direct answers. No list of ten blue links, no scrolling, no clicking. One answer. Maybe two. If your brand isn't in that answer, you don't exist in that conversation.\n\nWe went from \"you need to be on page one of Google\" to \"you need to BE the answer\" in under two years. Right now, 43% of Google searches end without a single click to an external website. When Google's AI Mode is active, that number jumps to 93%. We measure this with Answer Share™, a comprehensive metric that calculates the probability of your brand showing up in AI answers, whether that's from the model's memory (training data) or real-time retrieval. And right now, most brands have close to zero Answer Share. That's a problem, and it's also an opportunity if you move on it now."
  },
  {
    id: 2,
    question: "How is my website appearing in ChatGPT, Perplexity, and other AI models?",
    answer: "Probably not the way you think. Or not at all. That's actually the most common discovery when we run a baseline.\n\nAI models don't crawl your site the way Google does. They pull from training data, from sources they trust, from structured content that's easy to parse and cite. So your beautiful website might rank great on Google and be completely invisible to ChatGPT. Or worse: a competitor is showing up in the AI answer for questions YOUR brand should own. And with AI chatbot sessions now hitting 1.2 billion monthly visits across platforms, that's a massive audience you could be missing.\n\nThe only way to know is to actually test it. Go ask ChatGPT and Perplexity the questions your customers ask. See who shows up. See if it's you. I can almost guarantee the results will surprise you, and that's exactly where the work starts."
  },
  {
    id: 3,
    question: "What's the difference between SEO and AI visibility?",
    answer: "SEO gets you ranked in a list. AI visibility gets you cited in an answer.\n\nWith SEO, you're optimizing to appear in search results. You're fighting for position on a page of links. With AI visibility (sometimes called AEO, or Answer Engine Optimization), you're optimizing to be the source an AI model pulls from when it generates a direct answer.\n\nDifferent mechanics entirely. Google's algorithm rewards backlinks, keywords, and domain authority. AI models reward structured, authoritative, citable content: clear claims, named experts, specific data points, and consistent information across multiple trusted sources. Google's March 2026 core update actually made these worlds closer by rewarding original expertise and penalizing scaled, low-value content. But they're still not the same game. You can crush it on Google and be invisible to AI. I see it every single day."
  },
  {
    id: 4,
    question: "Why should I care about AI answer engines if I'm already ranking in Google?",
    answer: "Because your audience is already moving. Even if YOU'RE still Googling, your customers, prospects, and stakeholders are increasingly asking AI for answers instead.\n\nGoogle isn't going away tomorrow. But AI Overviews now appear in 18% of all Google searches and 57% of long-tail queries. OpenAI just reported 300 million weekly active users. Google AI Overviews reaches 2 billion monthly users. So even if someone IS using Google, they're increasingly reading an AI-generated answer at the top of the page, and your ten blue links are pushed below the fold. 43% of Google searches now result in zero clicks.\n\nIf you're only optimizing for traditional search, you're optimizing for yesterday. I'd rather have my clients show up in both places. And the brands getting into AI answers now are building an advantage that's going to be very hard to catch later."
  },
  {
    id: 5,
    question: "Which AI engines should I focus on first?",
    answer: "ChatGPT, Perplexity, and Google AI Overviews. That's where I'd start.\n\nChatGPT still holds about 64.5% of the generative AI market and drives 55 to 60% of AI-native referral traffic. It's the one your audience is most likely using for conversational queries. Perplexity accounts for 18 to 22% of AI-native referrals, and it cites its sources directly, which means you can actually see when you're being referenced. Google AI Overviews matters because it reaches 2 billion monthly users and sits on top of the search engine most people still use daily.\n\nAfter those three, keep an eye on Gemini, Claude, and Grok. But don't try to boil the ocean. Start with ChatGPT and Perplexity, get your baseline, and expand from there."
  },
  {
    id: 6,
    question: "What does my Answer Share score actually measure?",
    answer: "Answer Share™ is a comprehensive metric that measures the probability of your brand showing up in AI-generated answers, both from the model's memory (training data) and from real-time retrieval. It's more accurate than generic \"AI visibility scores\" because it accounts for how AI models actually work: some pull from what they've already learned, some search the web live, and most do a combination of both.\n\nWe're looking at real prompts: the actual questions your customers, prospects, and industry peers are asking AI engines. For each prompt, we measure whether your brand shows up in the response, whether you're mentioned by name, whether the information is accurate, and whether you're positioned favorably compared to competitors. It's share of voice for the AI era, but with the precision to show you exactly where you're winning and where you're invisible."
  },
  {
    id: 7,
    question: "How is the score calculated?",
    answer: "We run a defined set of prompts across multiple AI models (ChatGPT, Perplexity, Gemini, and others) and analyze the responses systematically.\n\nFor each prompt, we're tracking: Are you mentioned? Are you mentioned by name or just generically? Is the information about you accurate? Are you the primary recommendation or a secondary mention? Are competitors showing up instead of you? And critically, we're measuring this across both memory-based responses (what the model already knows about you) and real-time retrieval (what it finds when it searches).\n\nThose data points roll up into your overall Answer Share score. It's not one magic number from a black box. It's a measurable, repeatable analysis based on actual AI outputs for actual queries. We rerun the same prompts over time so you can track movement, see what's working, and know exactly where you stand."
  },
  {
    id: 8,
    question: "What's a \"good\" Answer Share score?",
    answer: "For most brands right now, ANY Answer Share is good, because most brands have close to zero.\n\nWhen we run baselines for new clients, the majority are showing up in fewer than 10% of the AI-generated answers for their key prompts. Some show up in none. So if you're even in the conversation, you're ahead of most of your competitors.\n\nThe goal is to be the primary cited source in the AI answer, not just a mention in a list of five. A strong Answer Share means you're showing up consistently, accurately, and favorably across multiple AI engines, in both memory-based and real-time responses, for the prompts your audience is actually asking. What \"good\" looks like depends on your industry and competitive landscape, but I want my clients aiming for dominant Answer Share in their category."
  },
  {
    id: 9,
    question: "How often should I check my Answer Share?",
    answer: "Monthly at minimum. Quarterly if you're not actively running an optimization program.\n\nAI models update their training data and retrieval sources regularly, and the competitive landscape shifts fast. Your memory-based Answer Share can change when models retrain or update their knowledge. Your real-time Answer Share can shift overnight when new content gets published.\n\nA brand that wasn't visible last month could start showing up because they published the right content. Or your score could drop because a competitor did something smart. You need to track the trend, not just take a single snapshot. If you're working with us on a Published Monthly™ program, we're tracking this for you every cycle and reporting back with specific before-and-after data."
  },
  {
    id: 10,
    question: "How do I improve my Answer Share?",
    answer: "You need to create content that AI models can find, trust, and cite. That's the whole game.\n\nSpecifically, that means publishing authoritative anchor content on your own domain that directly answers the questions your audience asks. It means distributing structured content through trusted channels (press wires, editorial placements, industry publications) so AI models encounter your brand across multiple credible sources. And it means making sure your content is structured in a way that's easy for AI to parse: clear claims, named experts, specific data points, FAQ formats, and consistent terminology.\n\nThis isn't \"write a blog post and hope.\" It's a systematic content strategy designed around the way AI models source information. That's exactly what Published Monthly™ was built to do."
  },
  {
    id: 11,
    question: "What content structure do AI models prefer?",
    answer: "AI models love content that makes their job easy. Clear question-and-answer formats. Specific, quotable claims with named sources. Structured data. Direct answers in the first sentence, then supporting detail.\n\nThink about it from the model's perspective. It needs to synthesize an answer from its sources. If your content buries the key point in paragraph seven of a 2,000-word thought piece, the model is less likely to pull from it. But if your content says \"Company X is the leading provider of Y, with Z results across N clients\" right up front, followed by supporting evidence? That's citable.\n\nFAQ formats work incredibly well. So do structured articles with clear headers, data tables, expert quotes with attribution, and definitive statements rather than hedging language. Stop writing \"we may be one of the potential leaders in this space\" and start writing \"we are the leader,\" with proof."
  },
  {
    id: 12,
    question: "How fast can I see results after optimizing for AI?",
    answer: "Faster than SEO, honestly. I've seen movement in Answer Share within 30 to 60 days of the first optimized content going live.\n\nThe reason is that AI models, especially Perplexity and Google AI Overviews, are pulling from current sources in near real-time. They're not waiting for a crawl cycle the way traditional Google indexing does. When you publish a well-structured AI Notice through GlobeNewswire or land an editorial placement on a high-authority outlet, AI models can start citing that content quickly.\n\nThat said, dominant Answer Share doesn't happen overnight. The first 90 days builds your foundation. Months three through six is where you start seeing compounding returns as multiple pieces of content reinforce each other across sources. This is a program, not a one-and-done tactic."
  },
  {
    id: 13,
    question: "Does optimizing for AI hurt my Google SEO?",
    answer: "No. And Google just proved it. Their March 2026 core update dropped three days ago and it rewards exactly what AI visibility optimization requires: original expertise, structured content, verifiable authority, and named sources. Sites with original research gained 22% in visibility. AI content farms that were publishing scaled, low-value pages? They lost 60 to 80% of their traffic.\n\nThe content principles that make you visible to AI (authoritative claims, structured formatting, expert attribution, strong backlinks from credible sources) are now MORE rewarded by Google than ever. When we publish anchor articles on a client's domain optimized for AI citation, those articles typically perform well in traditional search too. The editorial placements we secure build domain authority. The press wires build backlink profiles.\n\nI've never seen a case where doing AI visibility work hurt a client's SEO."
  },
  {
    id: 14,
    question: "Should I write different content for AI vs. Google?",
    answer: "Not different content. Differently structured content.\n\nYou don't need two separate content strategies. You need one strategy that serves both. The anchor article on your website should be optimized for both Google search and AI citation. The way you do that is by structuring content with clear, direct answers at the top (great for AI), supported by depth and detail below (great for SEO), with proper headers, schema markup, and internal linking throughout.\n\nWhere the strategies diverge is distribution. For Google, you're focused on on-page SEO and backlinks. For AI, you also need to think about third-party credible sources: press wires, editorial placements, industry publications. AI models weight content that appears consistently across multiple trusted sources. So it's not about writing different content. It's about writing smarter content and distributing it wider."
  },
  {
    id: 15,
    question: "What's the fastest way to get cited by AI models?",
    answer: "Publish structured, authoritative content through trusted distribution channels, and do it consistently.\n\nIf I had to give you the fastest single move: write a definitive FAQ or guide on your domain that directly answers the top five questions in your space. Use clear, quotable language. Name your experts. Include specific numbers and data points. Then distribute supporting content through GlobeNewswire and pitch an editorial article to a high-authority publication in your industry that links back to your anchor piece.\n\nThat combination (owned authoritative content plus third-party validation from trusted sources) is what AI models look for when deciding who to cite. One well-executed cycle of this can move the needle within 30 days. Three cycles? That's when brands start dominating their Answer Share."
  },
  {
    id: 16,
    question: "How do I track my Answer Share over time?",
    answer: "Start simple: create a list of 10 to 20 prompts that your ideal customer would ask an AI engine. Run those prompts through ChatGPT and Perplexity every month. Screenshot the results. Document who shows up and where.\n\nThat manual approach works, but it doesn't scale, especially when the AI landscape is shifting as fast as it is right now. For serious tracking, you want a platform that automates prompt testing across multiple AI models and gives you trend data over time. We built our ZAVI™ platform for exactly this. It runs your prompt sets across engines, tracks your Answer Share, and shows you movement month over month.\n\nThe key is consistency. Same prompts, same cadence, documented results. Without that, you're guessing. With it, you can tie specific content actions to specific score improvements."
  },
  {
    id: 17,
    question: "What tools do you recommend for AEO (Answer Engine Optimization)?",
    answer: "The space is still emerging, so let me give you the honest landscape.\n\nFor monitoring and measurement, our ZAVI™ platform tracks Answer Share across AI models and maps prompts to content performance. Perplexity is also useful as a research tool because it shows its sources, so you can see in real-time who's being cited.\n\nFor content distribution, GlobeNewswire is our go-to for AI Notices: structured press content designed specifically for AI citation. For editorial placements, you need relationships with publishers and outlets that AI models trust as sources. For on-site optimization, standard SEO tools like Semrush, Ahrefs, and Clearscope still matter for the foundational work. Schema markup tools help with structured data. And honestly? ChatGPT itself is one of the best research tools. Use it to test your own visibility before and after optimization.\n\nThe tooling is evolving fast, but the need for authoritative, well-structured, well-distributed content won't change."
  },
  {
    id: 18,
    question: "Can I see which AI models are citing my content?",
    answer: "Yes, with some caveats.\n\nPerplexity is the easiest to track because it explicitly lists its sources with links. You can see exactly when and where your content gets cited. Google AI Overviews sometimes links to sources too, so you can spot your brand in those responses.\n\nChatGPT is trickier. It generates answers from its training data and sometimes from browsing, but it doesn't always show sources the way Perplexity does. With the browsing feature enabled, it may link to sources, but the attribution isn't as consistent.\n\nThis is exactly why we run systematic prompt testing rather than relying on passive tracking. You can't wait for the AI models to tell you they're citing you. You need to proactively ask the questions your audience asks and see who shows up. That's the measurement approach that actually works."
  },
  {
    id: 19,
    question: "What services does Zen Media offer for AI visibility?",
    answer: "We built Published Monthly™ specifically for this. It's a systematic program that creates, distributes, and measures content designed to increase your brand's Answer Share in AI-generated responses.\n\nIn practice: We start with an Answer Share baseline, running your key prompts across AI engines to measure the probability of your brand showing up in both memory-based and real-time AI answers. Then we build a content program around your specific gaps: anchor articles on your domain, AI Notices distributed through GlobeNewswire, editorial article placements in high-authority publications, and ongoing measurement through our ZAVI™ platform.\n\nEvery piece of content we produce is structured for AI citation: clear claims, named experts, specific data, and strategic distribution across trusted sources. It's not a one-time audit or a PDF of recommendations. It's an ongoing program that builds your AI visibility month over month, with real measurement to prove it's working."
  },
  {
    id: 20,
    question: "How do I get help with my AI visibility strategy?",
    answer: "Start at asksarah.ai. That's my home base where I share tools, insights, and resources for AI visibility. A lot of it is free because I believe in giving away enough knowledge for people to understand the problem and start moving on it.\n\nIf you want to go deeper, reach out to us at Zen Media. We'll run a baseline on your brand's current AI visibility, show you exactly where you stand, and map out what a Published Monthly™ program would look like for your specific situation. No generic pitch deck. We show you your actual data and build from there.\n\nYou can also connect with me on LinkedIn where I post about AI visibility, tools I'm building, and what we're learning from client programs in real time. I'm a problem solver who loves to strategize and build. If you're struggling with this, bring it. Let's figure it out together."
  }
]

export default function SarahChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sarah. Ask me anything about AI visibility, your score, or how to improve your website's presence in AI models.",
      sender: 'sarah',
      timestamp: new Date()
    }
  ])
  const [selectedQA, setSelectedQA] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSelectQuestion = (qa: QAItem) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: qa.question,
      sender: 'user',
      timestamp: new Date()
    }

    const sarahMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: qa.answer,
      sender: 'sarah',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage, sarahMessage])
    setSelectedQA(null)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-accent text-brand-black shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            aria-label="Open chat with Sarah"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-brand-dark border border-brand-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-accent to-brand-blue p-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-brand-black">Ask Sarah</h2>
                <p className="text-xs text-brand-black/80">AI Visibility Expert</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-black hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                      message.sender === 'user'
                        ? 'bg-brand-accent text-brand-black'
                        : 'bg-brand-surface border border-brand-border text-brand-text'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Question Selector */}
            <div className="border-t border-brand-border p-4 max-h-[200px] overflow-y-auto">
              <button
                onClick={() => setSelectedQA(selectedQA === null ? null : null)}
                className="w-full mb-2 p-2 bg-brand-surface border border-brand-border rounded text-sm text-brand-text hover:border-brand-cyan transition-colors flex items-center justify-between"
              >
                <span>Browse Questions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${selectedQA !== null ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {selectedQA === null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    {qaData.map(qa => (
                      <button
                        key={qa.id}
                        onClick={() => handleSelectQuestion(qa)}
                        className="w-full p-2 text-left bg-brand-surface/50 border border-brand-border/50 rounded text-xs text-brand-text hover:bg-brand-surface hover:border-brand-cyan transition-colors"
                      >
                        {qa.question}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
