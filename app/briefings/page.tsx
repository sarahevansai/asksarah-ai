import type { Metadata } from 'next'
import Link from 'next/link'
import { briefings } from '@/lib/briefings'

export const metadata: Metadata = {
  title: 'Daily AI Briefings — Ask Sarah',
  description: 'Daily AI news briefings for executives and business leaders. What happened in AI today, why it matters, and exactly what to do about it.',
  openGraph: {
    title: 'Daily AI Briefings — Ask Sarah',
    description: 'Daily AI news briefings for executives and business leaders. What happened in AI today, why it matters, and exactly what to do about it.',
    type: 'website',
    url: 'https://asksarah.ai/briefings',
  },
}

export default function BriefingsPage() {
  const latestBriefing = briefings[0]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">Ask Sarah</Link>
          <div className="flex gap-8 text-sm">
            <Link href="/ai-score" className="hover:text-brand-cyan transition text-gray-300">Tools</Link>
            <Link href="/briefings" className="text-brand-cyan font-semibold">AI Briefings</Link>
            <Link href="/articles" className="hover:text-brand-cyan transition text-gray-300">Articles</Link>
            <a href="https://stan.store/asksarahevans" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition text-gray-300">Shop</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              DAILY • MON–FRI
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Morning<br />
            <span className="gradient-text">AI Briefing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Five AI stories that matter to business leaders — with exactly what to do about each one.
            Putting in the &ldquo;human&rdquo; hours so you don&rsquo;t have to.
          </p>

          {/* Subscribe CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16 max-w-xl">
            <a
              id="briefing-subscribe-top"
              href="https://prsarahevans.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan text-sm whitespace-nowrap text-center"
            >
              Get Daily Briefings on Substack →
            </a>
          </div>
        </div>
      </section>

      {/* Latest Briefing Spotlight */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-brand-cyan/60 uppercase mb-4">Latest Edition</div>
          <Link href={`/briefings/${latestBriefing.slug}`} className="block group">
            <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-2xl border border-brand-cyan/30 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">{latestBriefing.displayDate}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50 inline-block" />
                  <span className="text-xs text-gray-500">{latestBriefing.items.length} signals</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-cyan transition leading-snug">
                  {latestBriefing.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">{latestBriefing.teaser}</p>

                {/* Preview of first item */}
                <div className="border-l-2 border-brand-cyan/40 pl-5 mb-6">
                  <p className="text-sm font-bold text-brand-cyan mb-1">
                    ⚡ {latestBriefing.items[0].headline}
                  </p>
                  <p className="text-sm text-gray-400 line-clamp-2">{latestBriefing.items[0].body.split('\n')[0]}</p>
                </div>

                <div className="flex items-center gap-2 text-brand-cyan font-semibold text-sm group-hover:gap-4 transition-all">
                  Read full briefing
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs font-bold tracking-widest text-brand-cyan/60 uppercase">All Editions</div>
            <div className="text-xs text-gray-500">{briefings.length} briefings archived</div>
          </div>

          <div className="space-y-4">
            {briefings.slice(1).map((briefing) => (
              <Link key={briefing.slug} href={`/briefings/${briefing.slug}`} className="block group">
                <div className="p-6 rounded-xl border border-white/5 hover:border-brand-cyan/30 bg-white/2 hover:bg-brand-cyan/5 transition-all duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-gray-500">{briefing.displayDate}</span>
                        <span className="text-xs text-gray-600">·</span>
                        <span className="text-xs text-gray-600">{briefing.items.length} signals</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition mb-2 leading-snug">
                        {briefing.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{briefing.teaser}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {briefing.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-brand-cyan transition flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20">
            <h2 className="text-3xl font-bold mb-4">Never miss a briefing</h2>
            <p className="text-gray-300 mb-8">
              Published Monday–Friday. Five signals. One action each. Under 5 minutes to read.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <a
                id="briefing-subscribe-footer-btn"
                href="https://prsarahevans.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan text-sm text-center"
              >
                Subscribe Free on Substack →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-cyan/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© 2026 Ask Sarah. All rights reserved.</p>
      </footer>
    </main>
  )
}
