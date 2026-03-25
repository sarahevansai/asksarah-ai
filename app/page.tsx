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
          <div className="flex gap-8">
            <Link href="/ai-score" className="hover:text-brand-cyan transition">Tools</Link>
            <Link href="/articles" className="hover:text-brand-cyan transition">Articles</Link>
            <a href="https://stan.store/asksarahevans" target="_blank" className="hover:text-brand-cyan transition">Shop</a>
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
