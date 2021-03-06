export interface SearchParams {
  any?: string
}

export interface RecordSummary {
  id: string
  uuid: string
  title: string
  abstract: string
  url: string
  thumbnailUrl: string
  logoUrl?: string
  downloadable?: boolean
  viewable?: boolean
  updateFrequency?: string
}

export interface RecordBrief extends RecordSummary {
  organization: string
  type: string
}

export interface RecordMetric {
  value: string
  recordCount: number
}

export enum ResultsListLayout {
  'BLOCK' = 'BLOCK',
  'LIST' = 'LIST',
  'TEXT' = 'TEXT',
}

export const RESULTS_PAGE_SIZE = 10
