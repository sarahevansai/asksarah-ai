'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AIScorePage() {
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulated analysis - in production this would call your API
    setTimeout(() => {
      const score = Math.floor(Math.random() * 40 + 40)
      const metrics = [
        { name: 'Recency', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'Relevance', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'AI Citations', score: Math.floor(Math.random() * 100), status: 'fair' },
        { name: 'Indexing', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'Authority', score: Math.floor(Math.random() * 100), status: 'fair' },
        { name: 'Backlinks', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'E-E-A-T', score: Math.floor(Math.random() * 100), status: 'fair' },
        { name: 'Update Frequency', score: Math.floor(Math.random() * 100), status: 'poor' },
        { name: 'Schema Markup', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'Image Optimization', score: Math.floor(Math.random() * 100), status: 'fair' },
        { name: 'Expert Voice', score: Math.floor(Math.random() * 100), status: 'good' },
        { name: 'Content Structure', score: Math.floor(Math.random() * 100), status: 'good' },
      ]
      
      setResult({
        domain,
        totalScore: score,
        scoreLabel: score >= 70 ? 'Excellent' : score >= 50 ? 'Good' : 'Needs Work',
        metrics
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-brand-cyan hover:text-brand-blue transition mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">AI Visibility Analyzer</h1>
          <p className="text-xl text-gray-300">Analyze how visible your domain is to AI engines in seconds.</p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-3">Enter Your Domain</label>
                <input
                  type="text"
                  placeholder="example.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-6 py-4 bg-brand-dark border-2 border-brand-cyan rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Analyze My Domain'}
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{result.domain}</h2>
              <div className="text-6xl font-bold gradient-text mb-4">{result.totalScore}/100</div>
              <p className="text-2xl text-gray-300">{result.scoreLabel}</p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Metric Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {result.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="p-6 bg-brand-cyan/10 rounded-lg border border-brand-cyan/20">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold">{metric.name}</h4>
                      <span className="text-2xl font-bold text-brand-cyan">{metric.score}</span>
                    </div>
                    <div className="w-full bg-brand-dark rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full h-2 transition-all"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 p-8 rounded-xl border border-brand-cyan/30 text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Unlock Your Full Potential</h3>
              <p className="text-gray-300 mb-6">Get personalized recommendations to improve your AI visibility.</p>
              <a 
                href="https://chatgpt.com/g/g-6904a060fd8c8191bf5cdbc82571fee9-ai-visibility-engine-geo"
                target="_blank"
                className="inline-block px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition"
              >
                Get Detailed Analysis
              </a>
            </div>

            <button
              onClick={() => setResult(null)}
              className="w-full px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-bold rounded-lg hover:bg-brand-cyan/10 transition"
            >
              Analyze Another Domain
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
