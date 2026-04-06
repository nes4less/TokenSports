import { generateDateString, generateUUID } from '../utils'

export class Todo {
  static collection = 'todos'
  id: string
  title: string
  description: string | null
  project: string | null
  domain: string | null
  priority: string
  status: string
  sourceId: string | null
  sourceType: string | null
  createdBy: string | null
  tags: string[]
  metadata: Record<string, string>
  completedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<Todo>) {
    this.id = data?.id || generateUUID()
    this.title = data?.title || ''
    this.description = data?.description || null
    this.project = data?.project || null
    this.domain = data?.domain || null
    this.priority = data?.priority || 'medium'
    this.status = data?.status || 'open'
    this.sourceId = data?.sourceId || null
    this.sourceType = data?.sourceType || null
    this.createdBy = data?.createdBy || null
    this.tags = data?.tags || []
    this.metadata = data?.metadata || {}
    this.completedAt = data?.completedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
