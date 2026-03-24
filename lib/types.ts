export interface MetricScore {
  name: string
  score: number
  status: 'excellent' | 'good' | 'fair' | 'poor'
}

export interface AnalysisResult {
  domain: string
  totalScore: number
  scoreLabel: string
  metrics: MetricScore[]
}

export type AnalysisState = 'idle' | 'loading' | 'results' | 'error'
