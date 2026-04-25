export interface Stat {
  id: string
  figure: string
  label: string
  context: string
  source: string
  sourceUrl?: string
  category: StatCategory
  date: string // YYYY-MM or YYYY
}

export type StatCategory =
  | 'adoption'
  | 'content'
  | 'revenue'
  | 'workforce'
  | 'consumer'
  | 'brand'
  | 'seo'

export interface StatCategoryMeta {
  key: StatCategory
  label: string
  icon: string
  description: string
}

export const categories: StatCategoryMeta[] = [
  {
    key: 'adoption',
    label: 'AI Adoption',
    icon: '📈',
    description: 'How fast businesses and consumers are adopting AI tools',
  },
  {
    key: 'content',
    label: 'Content & SEO',
    icon: '✍️',
    description: 'AI-generated vs. human content performance in search',
  },
  {
    key: 'revenue',
    label: 'Revenue & Market',
    icon: '💰',
    description: 'Market size, revenue milestones, and financial data',
  },
  {
    key: 'workforce',
    label: 'Workforce & Productivity',
    icon: '⚡',
    description: 'How AI is changing how teams work and what they produce',
  },
  {
    key: 'consumer',
    label: 'Consumer Behavior',
    icon: '🧠',
    description: 'Shifts in how audiences engage with AI-generated content',
  },
  {
    key: 'brand',
    label: 'Brand & Communications',
    icon: '📣',
    description: 'AI\'s impact on PR, brand voice, and communications strategy',
  },
  {
    key: 'seo',
    label: 'GEO & Search',
    icon: '🔍',
    description: 'Generative engine optimization and the future of search',
  },
]

export const stats: Stat[] = [
  // ── CONTENT & SEO ──────────────────────────────────────────────────────────
  {
    id: 'conductor-ai-visitors',
    figure: '2×',
    label: 'better conversion rate for AI visitors than organic',
    context:
      'Conductor studied 3.3 billion sessions across 13,770 enterprise domains and found that AI visitors convert at twice the organic rate.',
    source: 'Conductor, 2026',
    sourceUrl: 'https://lnkd.in/g7s-yxGC',
    category: 'seo',
    date: '2026-04',
  },
  {
    id: 'semrush-human-position-1',
    figure: '80%',
    label: 'of Google\'s #1 results are human-written',
    context:
      'Semrush analyzed 42,000 blog posts and found human-written content holds 80% of Google\'s Position 1 results. AI content lands there just 9% of the time.',
    source: 'Semrush, 2026',
    sourceUrl: 'https://www.semrush.com',
    category: 'content',
    date: '2026-04',
  },
  {
    id: 'semrush-ai-position-1',
    figure: '9%',
    label: 'of Google\'s #1 results are AI-written',
    context:
      'In Semrush\'s study of 42,000 blog posts, AI-generated content secured Position 1 only 9% of the time — versus 80% for human-written content.',
    source: 'Semrush, 2026',
    sourceUrl: 'https://www.semrush.com',
    category: 'content',
    date: '2026-04',
  },
  {
    id: 'semrush-8x-rank',
    figure: '8×',
    label: 'more likely for human content to rank #1',
    context:
      'Human-written content is 8 times more likely than AI content to reach Google\'s top position, based on Semrush\'s 42,000-post analysis.',
    source: 'Semrush, 2026',
    sourceUrl: 'https://www.semrush.com',
    category: 'content',
    date: '2026-04',
  },

  // ── CONSUMER BEHAVIOR ──────────────────────────────────────────────────────
  {
    id: 'digiday-ai-creator-drop',
    figure: '26%',
    label: 'of consumers now prefer AI creator content (down from 60%)',
    context:
      'Consumer preference for AI-generated creator content collapsed from 60% in 2023 to just 26% today. Brands winning in 2026 lean into real voices and unscripted moments.',
    source: 'Digiday, 2026',
    sourceUrl: 'https://digiday.com',
    category: 'consumer',
    date: '2026-04',
  },
  {
    id: 'gen-ai-us-population',
    figure: '53%',
    label: 'of the US population uses generative AI',
    context:
      'Generative AI reached 53% of the US population in just 3 years — faster than the internet or the personal computer.',
    source: 'Stanford AI Index / MIT Technology Review, 2026',
    category: 'adoption',
    date: '2026-04',
  },
  {
    id: 'ai-user-value-tripled',
    figure: '3×',
    label: 'increase in median dollar value per AI user (2025–2026)',
    context:
      'The median dollar value per AI user tripled between 2025 and 2026, according to the Stanford AI Index reported by MIT Technology Review.',
    source: 'Stanford AI Index / MIT Technology Review, 2026',
    category: 'adoption',
    date: '2026-04',
  },

  // ── WORKFORCE & PRODUCTIVITY ───────────────────────────────────────────────
  {
    id: 'uber-ai-code',
    figure: '72%',
    label: 'of code in Uber\'s IDEs is now AI-generated',
    context:
      'After giving 5,000 engineers Claude Code in December 2025, Uber saw 72% of all IDE-generated code become AI-written. The full-year AI budget was consumed by April.',
    source: 'Uber / Anthropic, 2026',
    category: 'workforce',
    date: '2026-04',
  },
  {
    id: 'uber-claude-daily-use',
    figure: '63%',
    label: 'of Uber\'s engineers used Claude Code daily within 2 months',
    context:
      'Within two months of deploying Claude Code to 5,000 engineers, 63% were using it daily — a pace that burned through Uber\'s full-year AI budget by April 2026.',
    source: 'Uber / Anthropic, 2026',
    category: 'workforce',
    date: '2026-04',
  },
  {
    id: 'linkedin-ai-pay',
    figure: '$150/hr',
    label: 'LinkedIn pays senior engineers to train AI',
    context:
      'LinkedIn launched an AI Labor Marketplace offering senior engineers $150/hr and domain experts like nurses and finance professionals up to $100/hr to train AI models.',
    source: 'LinkedIn, April 2026',
    category: 'workforce',
    date: '2026-04',
  },

  // ── REVENUE & MARKET ───────────────────────────────────────────────────────
  {
    id: 'anthropic-revenue-tripled',
    figure: '$30B',
    label: 'Anthropic annual revenue run rate (tripled from $9B in 2025)',
    context:
      'Anthropic\'s annual revenue run rate hit $30 billion in 2026, up from $9 billion at end of 2025. The company now has more than 1,000 enterprise customers spending over $1 million annually.',
    source: 'Anthropic, 2026',
    category: 'revenue',
    date: '2026-04',
  },
  {
    id: 'aws-ai-arr',
    figure: '$15B',
    label: 'AWS AI annual revenue run rate',
    context:
      'Amazon\'s AWS AI hit $15 billion in annual run rate. CEO Andy Jassy noted that at the same stage of AWS cloud\'s history, the run rate was $58 million — AI is 260× ahead of that pace.',
    source: 'Amazon / Andy Jassy letter, 2026',
    category: 'revenue',
    date: '2026-04',
  },
  {
    id: 'meta-ad-revenue-overtake',
    figure: '$243B',
    label: 'Meta projected 2026 net ad revenue — edging past Google',
    context:
      'eMarketer projects Meta hits $243.46B in 2026 net ad revenue, edging Google\'s $239.54B for the first time in history. Meta growth: 24.1%. Google: 11.9%.',
    source: 'eMarketer, 2026',
    category: 'revenue',
    date: '2026-04',
  },
  {
    id: 'openai-revenue',
    figure: '$25B+',
    label: 'OpenAI annualized revenue',
    context:
      'OpenAI surpassed $25 billion in annualized revenue as of early 2026 and is taking early steps toward a public listing potentially as soon as late 2026.',
    source: 'The Information / OpenAI, 2026',
    category: 'revenue',
    date: '2026-04',
  },
  {
    id: 'mercor-arr',
    figure: '$500M',
    label: 'Mercor ARR — piping human experts to train AI',
    context:
      'Mercor, which connects lawyers, PhDs, and doctors to grade AI outputs for OpenAI, Anthropic, Google, and Meta, hit $500M ARR at a $10B valuation.',
    source: 'The Information, 2026',
    category: 'revenue',
    date: '2026-04',
  },

  // ── BRAND & COMMUNICATIONS ─────────────────────────────────────────────────
  {
    id: 'brand-voice-ai-failure',
    figure: '0',
    label: 'adjective-based brand guides that translate to AI outputs',
    context:
      'MarTech reports that brand voice guides full of adjectives like "approachable" don\'t translate to AI tools. AI needs banned phrases, structure rules, and three on-brand examples to produce consistent content.',
    source: 'MarTech, 2026',
    category: 'brand',
    date: '2026-04',
  },
  {
    id: 'anthropic-enterprise-customers',
    figure: '1,000+',
    label: 'Anthropic enterprise customers spending $1M+ annually',
    context:
      'Anthropic has more than 1,000 enterprise customers each spending over $1 million annually on Claude — with Claude already embedded in Carta, Zoom, and hundreds of enterprise stacks.',
    source: 'Anthropic, 2026',
    category: 'brand',
    date: '2026-04',
  },

  // ── GEO & SEARCH ───────────────────────────────────────────────────────────
  {
    id: 'top-4-models-3pct',
    figure: '<3%',
    label: 'performance gap between the top 4 AI models on benchmarks',
    context:
      'The top 4 AI models are now separated by less than 3% on benchmarks, according to the Stanford AI Index. The competitive advantage has shifted from model quality to implementation and prompt strategy.',
    source: 'Stanford AI Index, 2026',
    category: 'seo',
    date: '2026-04',
  },
  {
    id: 'design-md-google',
    figure: '1 file',
    label: 'Google\'s DESIGN.md — telling every AI tool how your brand looks',
    context:
      'Google Labs open-sourced DESIGN.md under Apache 2.0 on April 21, 2026. One markdown file encodes color palettes, typography, and component rules so AI agents apply your brand automatically across Claude, Cursor, and any AI coding tool.',
    source: 'Google Labs, April 2026',
    category: 'seo',
    date: '2026-04',
  },
]

export function getStatsByCategory(category: StatCategory): Stat[] {
  return stats.filter((s) => s.category === category)
}

export function getAllCategories(): StatCategory[] {
  return categories.map((c) => c.key)
}

export function getCategoryMeta(key: StatCategory): StatCategoryMeta | undefined {
  return categories.find((c) => c.key === key)
}
