import { generateDateString, generateUUID } from '../utils'

export class BugPattern {
  static collection = 'bug_patterns'
  id: string
  title: string
  description: string | null
  cause: string | null
  prevention: string | null
  scope: string
  domain: string | null
  severity: string
  ruleId: string | null
  occurrences: number
  project: string | null
  createdBy: string | null
  tags: string[]
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<BugPattern>) {
    this.id = data?.id || generateUUID()
    this.title = data?.title || ''
    this.description = data?.description || null
    this.cause = data?.cause || null
    this.prevention = data?.prevention || null
    this.scope = data?.scope || 'component'
    this.domain = data?.domain || null
    this.severity = data?.severity || 'medium'
    this.ruleId = data?.ruleId || null
    this.occurrences = data?.occurrences || 1
    this.project = data?.project || null
    this.createdBy = data?.createdBy || null
    this.tags = data?.tags || []
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
