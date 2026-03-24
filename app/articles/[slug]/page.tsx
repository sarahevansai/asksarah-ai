import Link from 'next/link'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Sample article data
  const articles: Record<string, any> = {
    'geo-replacing-seo': {
      title: 'GEO is Replacing SEO',
      date: 'Mar 24, 2026',
      category: 'Strategy',
      author: 'Sarah Evans',
      content: `
        <h2>The Search Landscape is Changing</h2>
        <p>For decades, SEO (Search Engine Optimization) has been the gold standard for visibility. But we're entering a new era: Generative Engine Optimization (GEO).</p>
        
        <p>AI-powered search engines like ChatGPT, Perplexity, and Claude are fundamentally changing how people discover information. These aren't traditional search engines that return links—they synthesize information and provide direct answers.</p>
        
        <h3>What is GEO?</h3>
        <p>Generative Engine Optimization is the practice of optimizing your content and visibility for AI-powered search engines. It requires a different approach than traditional SEO.</p>
        
        <h3>Why This Matters</h3>
        <p>40% of Gen Z now prefers AI-powered search over traditional Google. Market adoption is accelerating.</p>
      `
    },
    'ai-visibility-framework': {
      title: 'The AI Visibility Framework',
      date: 'Mar 20, 2026',
      category: 'Research',
      author: 'Sarah Evans',
      content: `<p>Coming soon. This article dives deep into our proprietary 5-layer visibility framework.</p>`
    },
    'published-monthly-system': {
      title: 'How Published Monthly Manufactures Visibility',
      date: 'Mar 15, 2026',
      category: 'Case Study',
      author: 'Sarah Evans',
      content: `<p>Coming soon. A behind-the-scenes look at how we generate consistent media placements.</p>`
    }
  }

  const article = articles[params.slug] || articles['geo-replacing-seo']

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/articles" className="text-brand-cyan hover:text-brand-blue transition mb-8 inline-block">
          ← Back to Articles
        </Link>
        
        <header className="mb-12">
          <div className="flex gap-4 items-center mb-6">
            <span className="text-sm px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan">
              {article.category}
            </span>
            <span className="text-sm text-gray-400">{article.date}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 gradient-text">{article.title}</h1>
          <p className="text-lg text-gray-400">By {article.author}</p>
        </header>

        <div 
          className="prose prose-invert max-w-none mb-20"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="border-t border-brand-cyan/20 pt-12">
          <h3 className="text-2xl font-bold mb-6">Want to analyze your visibility?</h3>
          <Link 
            href="/ai-score"
            className="inline-block px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-brand-blue transition glow-cyan"
          >
            Get Your AI Visibility Score
          </Link>
        </div>
      </article>

      <style>{`
        .prose h2 { font-size: 2rem; font-weight: bold; color: #00d4ff; margin-top: 2rem; margin-bottom: 1rem; }
        .prose h3 { font-size: 1.5rem; font-weight: bold; color: #1E88E5; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .prose p { margin-bottom: 1rem; line-height: 1.8; }
      `}</style>
    </main>
  )
}
