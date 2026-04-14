'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdvisoryPage() {
  const [selectedService, setSelectedService] = useState<'retainer' | 'vip' | null>(null)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">Ask Sarah</Link>
          <div className="flex gap-8">
            <Link href="/ai-score" className="hover:text-brand-cyan transition">Tools</Link>
            <Link href="/articles" className="hover:text-brand-cyan transition">Articles</Link>
            <Link href="/advisory" className="text-brand-cyan transition font-semibold">Advisory</Link>
            <a href="https://stan.store/asksarahevans" target="_blank" className="hover:text-brand-cyan transition">Shop</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Direct Access</span><br />
          to Sarah Evans
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Strategic advisory for leaders, founders, and CMOs building authority in the AI era. 
          Personalized guidance on visibility strategy, positioning, and scaling your influence.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Advisory Services</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Retainer */}
            <div 
              className={`p-10 rounded-2xl border-2 transition cursor-pointer ${
                selectedService === 'retainer' 
                  ? 'border-brand-cyan bg-brand-cyan/5' 
                  : 'border-brand-cyan/30 hover:border-brand-cyan/60 bg-brand-dark/50'
              }`}
              onClick={() => setSelectedService(selectedService === 'retainer' ? null : 'retainer')}
            >
              <h3 className="text-3xl font-bold text-brand-cyan mb-4">Strategic Retainer</h3>
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">$15,000<span className="text-xl text-gray-400">/month</span></div>
                <p className="text-brand-cyan/80">6-month minimum commitment</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Weekly strategy calls (60 min)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Custom AI visibility & positioning analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Direct Slack access for urgent questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Quarterly in-depth strategy reviews</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Access to exclusive research & frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Priority support for competitive intelligence</span>
                </li>
              </ul>

              {selectedService === 'retainer' && (
                <div className="mt-8 p-6 bg-brand-cyan/10 rounded-lg border border-brand-cyan/30">
                  <p className="text-sm text-gray-300 mb-4">
                    <strong>Best for:</strong> Founders, CEOs, and CMOs who need ongoing strategic guidance to build and scale AI visibility, positioning, and authority in their market.
                  </p>
                  <p className="text-sm text-gray-300 mb-6">
                    <strong>Typical outcomes:</strong> Clarity on competitive positioning, validated AI visibility strategy, quarterly milestone achievement.
                  </p>
                  <a
                    href="mailto:sarah@evans-global.com?subject=Strategic%20Retainer%20Inquiry&body=I%27m%20interested%20in%20discussing%20a%20strategic%20retainer%20engagement."
                    className="inline-block px-6 py-3 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition"
                  >
                    Schedule a Conversation
                  </a>
                </div>
              )}
            </div>

            {/* VIP Day */}
            <div 
              className={`p-10 rounded-2xl border-2 transition cursor-pointer ${
                selectedService === 'vip' 
                  ? 'border-brand-cyan bg-brand-cyan/5' 
                  : 'border-brand-cyan/30 hover:border-brand-cyan/60 bg-brand-dark/50'
              }`}
              onClick={() => setSelectedService(selectedService === 'vip' ? null : 'vip')}
            >
              <h3 className="text-3xl font-bold text-brand-cyan mb-4">VIP Strategy Day</h3>
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">$15,000<span className="text-xl text-gray-400">/day</span></div>
                <p className="text-brand-cyan/80">One-time intensive engagement</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Full-day immersive strategy session (6–8 hours)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Deep competitive positioning analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>AI visibility audit & optimization roadmap</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Custom frameworks for your market</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Written strategic recommendations & action plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>30-day follow-up check-in call</span>
                </li>
              </ul>

              {selectedService === 'vip' && (
                <div className="mt-8 p-6 bg-brand-cyan/10 rounded-lg border border-brand-cyan/30">
                  <p className="text-sm text-gray-300 mb-4">
                    <strong>Best for:</strong> Leaders who need rapid clarity on positioning, AI strategy, or a major market pivot. Perfect for pre-launch strategy or quarterly planning.
                  </p>
                  <p className="text-sm text-gray-300 mb-6">
                    <strong>Typical outcomes:</strong> Clear positioning statement, validated AI visibility strategy, implementation roadmap for next 90 days.
                  </p>
                  <a
                    href="mailto:sarah@evans-global.com?subject=VIP%20Strategy%20Day%20Inquiry&body=I%27m%20interested%20in%20scheduling%20a%20VIP%20Strategy%20Day."
                    className="inline-block px-6 py-3 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition"
                  >
                    Schedule a Day
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What to Expect</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-cyan text-brand-dark font-bold text-xl">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Initial Discovery</h3>
                <p className="text-gray-300">We understand your market, audience, positioning, and goals. You'll share your biggest challenges and what success looks like.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-cyan text-brand-dark font-bold text-xl">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Strategic Analysis</h3>
                <p className="text-gray-300">I analyze your competitive landscape, AI visibility, market positioning, and brand narrative. You'll get data-backed insights, not opinions.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-cyan text-brand-dark font-bold text-xl">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Custom Recommendations</h3>
                <p className="text-gray-300">You get a specific, implementable roadmap. Priorities ranked. Timeline clear. Ownership assigned. No generic advice.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-cyan text-brand-dark font-bold text-xl">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Execution Support</h3>
                <p className="text-gray-300">For retainers: ongoing weekly calls to track progress, adapt strategy, and unblock obstacles. For VIP Days: 30-day follow-up to validate progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Who These Services Are For</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl border border-brand-cyan/20">
              <h3 className="text-xl font-bold mb-4 text-brand-cyan">For Founders & CEOs</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Building personal brand authority alongside your company</li>
                <li>• Preparing for fundraising, acquisition, or IPO</li>
                <li>• Positioning your company in a crowded market</li>
                <li>• Needing a strategic thought partner</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl border border-brand-cyan/20">
              <h3 className="text-xl font-bold mb-4 text-brand-cyan">For CMOs & Comms Leaders</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Building AI visibility as a core strategy</li>
                <li>• Auditing current positioning against market</li>
                <li>• Planning a major brand repositioning</li>
                <li>• Training your team on new visibility tactics</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl border border-brand-cyan/20">
              <h3 className="text-xl font-bold mb-4 text-brand-cyan">For Agencies & Service Providers</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Developing AI-era service offerings for clients</li>
                <li>• Building your own thought leadership</li>
                <li>• Scaling visibility strategy across multiple clients</li>
                <li>• Competitive strategy for major accounts</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl border border-brand-cyan/20">
              <h3 className="text-xl font-bold mb-4 text-brand-cyan">For Executive Teams</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Offsite strategy sessions & planning</li>
                <li>• Team alignment on positioning & messaging</li>
                <li>• Workshops on AI visibility for leadership</li>
                <li>• Quarterly strategic reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sarah */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Why Work With Sarah</h2>
          <p className="text-lg text-gray-300 text-center mb-16">
            I don't consult. I partner. Everything recommended is rooted in production experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Production Experience</h3>
                <p className="text-gray-300">I run Published Monthly, the only productized AI visibility service in PR. Every framework here is tested on real clients at scale.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Honest Assessment</h3>
                <p className="text-gray-300">I'll tell you what's working and what isn't. Sometimes the answer is "you don't need my help right now," and I'll say that too.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">20+ Years of PR</h3>
                <p className="text-gray-300">I've built brands, positioned founders, closed major media deals, and navigated crisis. AI visibility is the next layer on top of that foundation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Builder, Not Theorist</h3>
                <p className="text-gray-300">I write code. I publish research. I run live shows. I'm not explaining how things should work — I'm showing how I make them work.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Long-Term Focus</h3>
                <p className="text-gray-300">This isn't about quick wins. We're building compounding advantage — positioning, credibility, and visibility that compounds over time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl text-brand-cyan">→</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Execution Focused</h3>
                <p className="text-gray-300">You get a roadmap, not a PowerPoint. Implementation plan, clear next steps, and support to actually get it done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Build Your AI Visibility?</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Strategic advisory for leaders building authority in the AI era. Let's talk about what's possible for you.
        </p>
        <a
          href="mailto:sarah@evans-global.com?subject=Advisory%20Services%20Inquiry&body=I%27m%20interested%20in%20learning%20more%20about%20your%20advisory%20services."
          className="inline-block px-10 py-5 bg-brand-cyan text-brand-dark font-bold text-lg rounded-lg hover:bg-brand-blue transition glow-cyan"
        >
          Schedule a Conversation
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-cyan/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© 2026 Ask Sarah. All rights reserved.</p>
      </footer>
    </main>
  )
}
