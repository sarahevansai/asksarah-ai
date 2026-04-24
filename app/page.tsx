import Link from 'next/link'
import SarahChatbot from '@/components/SarahChatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SarahChatbot />
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Ask Sarah</div>
          <div className="flex gap-8 text-sm">
            <Link href="/ai-score" className="hover:text-brand-cyan transition text-gray-300">Tools</Link>
            <Link href="/briefings" className="hover:text-brand-cyan transition text-gray-300">AI Briefings</Link>
            <Link href="/articles" className="hover:text-brand-cyan transition text-gray-300">Articles</Link>
            <a href="https://stan.store/asksarahevans" target="_blank" className="hover:text-brand-cyan transition text-gray-300">Shop</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">AI Visibility</span><br />
          in the Search Era
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Strategic research, visibility analysis, and AI-powered tools to help you dominate search and AI engines.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/ai-score"
            className="px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan"
          >
            Analyze Your Visibility
          </Link>
          <Link 
            href="/articles"
            className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-bold rounded-lg hover:bg-brand-cyan/10 transition"
          >
            Read Our Research
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Visibility Analysis",
                description: "Understand how you appear to AI engines. Analyze search presence, citations, and AI discoverability in seconds."
              },
              {
                title: "Strategic Research",
                description: "Deep industry analysis. Competitive intelligence. Market positioning frameworks for the AI era."
              },
              {
                title: "Visibility Tools",
                description: "Custom tools, dashboards, and frameworks to monitor and optimize your AI visibility over time."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl card-hover border border-brand-cyan/20">
                <h3 className="text-2xl font-bold mb-4 text-brand-cyan">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Briefings Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-widest">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-cyan"></span>
                  </span>
                  DAILY MON–FRI
                </span>
              </div>
              <h2 className="text-4xl font-bold gradient-text">Your Morning AI Brief</h2>
            </div>
            <Link href="/briefings" className="hidden md:flex items-center gap-2 text-brand-cyan font-semibold text-sm hover:gap-4 transition-all">
              All editions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: '⚡ UBER BURNED ITS FULL-YEAR AI BUDGET IN FOUR MONTHS', sub: 'Uber gave 5,000 engineers Claude Code in December. By April, the full-year budget was gone.', action: 'Pull your team\'s usage report tomorrow.', date: 'Apr 15' },
              { label: '⚡ LINKEDIN WILL PAY $150/HR TO TRAIN AI ON YOUR EXPERTISE', sub: 'LinkedIn launched an AI Labor Marketplace. Your domain expertise is now a product.', action: 'Post this week about your specialty.', date: 'Apr 15' },
              { label: '⚡ MIT: AI ADOPTION IS 260X AHEAD OF CLOUD AT THE SAME STAGE', sub: 'The Stanford AI Index: Generative AI hit 53% of US population in 3 years. The per-user value tripled.', action: '"AI adoption is faster than the internet."', date: 'Apr 14' },
              { label: '⚡ GOOGLE SOLVED THE "WE CAN\'T SEND CLIENT DATA TO AI" PROBLEM', sub: 'Google dropped Gemma 4: free, runs fully on-device, 256K context, works on a smartphone.', action: 'Every PR team now has a path to local AI.', date: 'Apr 11' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-brand-cyan/5 to-brand-blue/5 border border-brand-cyan/15 card-hover">
                <div className="text-xs text-gray-500 mb-3 font-mono">{item.date}</div>
                <p className="text-sm font-bold text-brand-cyan mb-2 leading-snug">{item.label}</p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{item.sub}</p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-brand-cyan/5 border-l-2 border-brand-cyan/40">
                  <span className="text-brand-cyan font-bold text-sm">→</span>
                  <p className="text-xs text-brand-cyan/80 font-medium">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/briefings"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-bold rounded-lg hover:bg-brand-cyan/10 transition"
            >
              Read all briefings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Analyze Your Visibility?</h2>
        <p className="text-lg text-gray-300 mb-12">Get a free AI visibility score in seconds. No signup required.</p>
        <Link 
          href="/ai-score"
          className="inline-block px-10 py-5 bg-brand-cyan text-brand-dark font-bold text-lg rounded-lg hover:bg-brand-blue transition glow-cyan"
        >
          Start Your Analysis
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-cyan/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© 2026 Ask Sarah. All rights reserved.</p>
      </footer>
    </main>
  )
}
