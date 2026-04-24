'use client'

import Link from 'next/link'
import { useState } from 'react'
import { stats, categories, type StatCategory } from '@/lib/stats'

const LAST_UPDATED = 'April 25, 2026'

export default function ResearchClient() {
  const [activeCategory, setActiveCategory] = useState<StatCategory | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? stats
      : stats.filter((s) => s.category === activeCategory)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Ask Sarah
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/ai-score" className="hover:text-brand-cyan transition text-gray-300">
              Tools
            </Link>
            <Link href="/briefings" className="hover:text-brand-cyan transition text-gray-300">
              AI Briefings
            </Link>
            <Link href="/research" className="text-brand-cyan font-semibold">
              Research
            </Link>
            <Link href="/articles" className="hover:text-brand-cyan transition text-gray-300">
              Articles
            </Link>
            <a
              href="https://stan.store/asksarahevans"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-cyan transition text-gray-300"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Live badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
              </span>
              UPDATED {LAST_UPDATED.toUpperCase()}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI in PR &amp; Communications
            <br />
            <span className="gradient-text">Stats &amp; Research Hub</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            The most important data points on AI adoption, content performance, market revenue, and
            brand strategy — curated from primary sources and updated as new research drops.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-10">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {stats.length} data points
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z" />
              </svg>
              {categories.length} categories
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated {LAST_UPDATED}
            </span>
          </div>

          {/* What this is — trust/methodology signal */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-10 max-w-3xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="text-brand-cyan font-bold">What this is:</span> Sarah Evans tracks AI
              developments daily across dozens of primary sources — earnings calls, research reports,
              and industry announcements. Every stat on this page is sourced from those primary
              sources and fed into this hub as new data emerges from the{' '}
              <Link href="/briefings" className="text-brand-cyan hover:underline">
                Morning AI Briefing
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <section className="pb-0 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 bg-brand-dark/90 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto py-3">
          <div className="flex flex-wrap gap-2">
            <button
              id="filter-all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-brand-cyan text-brand-dark glow-cyan'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              All ({stats.length})
            </button>
            {categories.map((cat) => {
              const count = stats.filter((s) => s.category === cat.key).length
              return (
                <button
                  key={cat.key}
                  id={`filter-${cat.key}`}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-brand-cyan text-brand-dark glow-cyan'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.icon} {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active category description */}
      {activeCategory !== 'all' && (
        <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm text-gray-400 italic">
              {categories.find((c) => c.key === activeCategory)?.description}
            </p>
          </div>
        </section>
      )}

      {/* Stats Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-brand-cyan/60 uppercase mb-6">
            {filtered.length} stat{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'all'
              ? ` in ${categories.find((c) => c.key === activeCategory)?.label}`
              : ' across all categories'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((stat) => {
              const catMeta = categories.find((c) => c.key === stat.category)
              return (
                <article
                  key={stat.id}
                  id={`stat-${stat.id}`}
                  className="group p-7 rounded-2xl border border-white/8 bg-white/2 hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 card-hover flex flex-col"
                >
                  {/* Category pill + date */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-medium">
                      {catMeta?.icon} {catMeta?.label}
                    </span>
                    <span className="text-xs text-gray-600">{stat.date}</span>
                  </div>

                  {/* The big number */}
                  <div className="mb-3">
                    <span className="text-5xl md:text-6xl font-black gradient-text leading-none tracking-tight">
                      {stat.figure}
                    </span>
                  </div>

                  {/* Stat label */}
                  <h2 className="text-base font-bold text-white mb-3 leading-snug">
                    {stat.label}
                  </h2>

                  {/* Context */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    {stat.context}
                  </p>

                  {/* Source line */}
                  <div className="border-t border-white/5 pt-4 mt-auto">
                    {stat.sourceUrl ? (
                      <a
                        href={stat.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-brand-cyan transition font-medium"
                      >
                        Source: {stat.source} ↗
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600 font-medium">
                        Source: {stat.source}
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology / Attribution block — GEO trust signal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/2">
            <h2 className="text-lg font-bold text-white mb-3">About This Research Hub</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Every data point on this page is sourced from primary research — earnings releases,
              analyst reports, peer-reviewed studies, and industry announcements. Sarah Evans tracks
              AI developments across hundreds of sources weekly as part of the{' '}
              <Link href="/briefings" className="text-brand-cyan hover:underline">
                Morning AI Briefing
              </Link>
              . Stats are added to this hub as new primary research becomes available and retired
              when superseded by more current data.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Using these stats?</span> Please attribute
              to <span className="text-brand-cyan">asksarah.ai/research</span> and link back to this
              page. For press or research inquiries, reach out via{' '}
              <a href="mailto:sarah@zenmedia.com" className="text-brand-cyan hover:underline">
                sarah@zenmedia.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20">
            <h2 className="text-3xl font-bold mb-4">Get the data first</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Every stat on this page started as a signal in the Morning AI Briefing — published
              Monday–Friday for executives who need to know what happened in AI and exactly what to
              do about it.
            </p>
            <a
              id="research-subscribe-btn"
              href="https://prsarahevans.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan text-sm"
            >
              Subscribe Free on Substack →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-cyan/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© 2026 Ask Sarah. All rights reserved.</p>
      </footer>
    </main>
  )
}
