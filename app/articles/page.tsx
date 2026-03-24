import Link from 'next/link'

export default function ArticlesPage() {
  const articles = [
    {
      id: 'geo-replacing-seo',
      title: 'GEO is Replacing SEO',
      excerpt: 'How Generative Engine Optimization is becoming the new frontier for visibility.',
      date: 'Mar 24, 2026',
      category: 'Strategy'
    },
    {
      id: 'ai-visibility-framework',
      title: 'The AI Visibility Framework',
      excerpt: 'A comprehensive 5-layer system for understanding and optimizing your visibility across AI engines.',
      date: 'Mar 20, 2026',
      category: 'Research'
    },
    {
      id: 'published-monthly-system',
      title: 'How Published Monthly Manufactures Visibility',
      excerpt: 'Inside the system that generates consistent media placements and AI citations.',
      date: 'Mar 15, 2026',
      category: 'Case Study'
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-brand-cyan hover:text-brand-blue transition mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold mb-4 gradient-text">Strategic Research</h1>
          <p className="text-xl text-gray-300 mb-16">
            Deep dives into AI visibility, competitive intelligence, and strategic positioning for the search era.
          </p>

          <div className="space-y-12">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-xl card-hover border border-brand-cyan/20"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex gap-3 mb-3">
                      <span className="text-sm px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-400">{article.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-white">{article.title}</h2>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <a 
                      href={`/articles/${article.id}`}
                      className="text-brand-cyan hover:text-brand-blue transition font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-brand-cyan/10 rounded-xl text-center border border-brand-cyan/20">
            <h3 className="text-2xl font-bold mb-4">More Research Coming</h3>
            <p className="text-gray-300">
              New articles published regularly. Subscribe for updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
