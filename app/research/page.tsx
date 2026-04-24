import type { Metadata } from 'next'
import ResearchClient from './ResearchClient'

export const metadata: Metadata = {
  title: 'AI in PR & Communications: Stats, Data & Research Hub — Ask Sarah',
  description:
    'The most important statistics on AI adoption, content performance, brand strategy, and market revenue for PR and marketing professionals. Updated from primary sources.',
  openGraph: {
    title: 'AI in PR & Communications: Stats, Data & Research Hub — Ask Sarah',
    description:
      'The most important statistics on AI adoption, content performance, brand strategy, and market revenue for PR and marketing professionals. Updated from primary sources.',
    type: 'website',
    url: 'https://asksarah.ai/research',
  },
  keywords: [
    'AI in PR statistics',
    'AI marketing stats 2026',
    'generative AI adoption data',
    'AI content SEO statistics',
    'AI in communications research',
    'AI brand strategy data',
    'PR AI data hub',
    'AI search statistics',
  ],
}

export default function ResearchPage() {
  return <ResearchClient />
}
