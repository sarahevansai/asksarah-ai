import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBriefingBySlug, getAllSlugs } from '@/lib/briefings'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const briefing = getBriefingBySlug(params.slug)
  if (!briefing) return {}
  return {
    title: `${briefing.title} — Ask Sarah`,
    description: briefing.teaser,
    openGraph: {
      title: `${briefing.title} — Ask Sarah`,
      description: briefing.teaser,
      type: 'article',
      url: `https://asksarah.ai/briefings/${briefing.slug}`,
    },
  }
}

export default function BriefingPage({ params }: Props) {
  const briefing = getBriefingBySlug(params.slug)
  if (!briefing) notFound()

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

      {/* Article */}
      <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/briefings"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan transition mb-10"
            id="briefing-back-link"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Briefings
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-cyan"></span>
                </span>
                AI Briefing
              </span>
              <span className="text-xs text-gray-500">{briefing.displayDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              {briefing.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">{briefing.teaser}</p>

            <div className="flex flex-wrap gap-2">
              {briefing.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-brand-cyan/50 via-brand-blue/30 to-transparent mb-12" />

          {/* Briefing Items */}
          <div className="space-y-12">
            {briefing.items.map((item) => (
              <div key={item.number} id={`signal-${item.number}`} className="group">
                {/* Signal number + headline */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-bold text-sm mt-0.5">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold tracking-wider text-brand-cyan/70 mb-1">SIGNAL {item.number}</p>
                    <h2 className="text-xl font-bold text-white leading-snug">
                      ⚡ {item.headline}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="ml-12">
                  {item.body.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed mb-4 text-[15px]">
                      {paragraph}
                    </p>
                  ))}

                  {/* Takeaway */}
                  <div className="mt-5 p-4 rounded-xl bg-brand-cyan/5 border-l-4 border-brand-cyan flex gap-3">
                    <span className="text-brand-cyan font-bold text-lg flex-shrink-0">→</span>
                    <p className="text-brand-cyan/90 font-medium text-sm leading-relaxed">
                      {item.takeaway}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-brand-cyan/50 via-brand-blue/30 to-transparent mt-16 mb-12" />

          {/* Subscribe + Share footer */}
          <div className="space-y-8">
            {/* Subscribe */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 text-center">
              <h3 className="text-2xl font-bold mb-2">Get tomorrow&apos;s briefing</h3>
              <p className="text-gray-400 text-sm mb-6">Published every weekday morning. 5 minutes. No fluff.</p>
              <a
                id="briefing-article-subscribe-btn"
                href="https://prsarahevans.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan text-sm"
              >
                Subscribe Free on Substack →
              </a>
            </div>

            {/* LinkedIn + nav */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={briefing.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="briefing-linkedin-link"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:border-brand-cyan/40 text-gray-400 hover:text-white transition text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                </svg>
                View original on LinkedIn
              </a>
              <Link
                href="/briefings"
                id="briefing-back-bottom"
                className="text-sm text-gray-400 hover:text-brand-cyan transition"
              >
                ← Browse all briefings
              </Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-brand-cyan/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© 2026 Ask Sarah. All rights reserved.</p>
      </footer>
    </main>
  )
}
