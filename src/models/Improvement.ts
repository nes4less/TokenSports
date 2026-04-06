import { generateDateString, generateUUID } from '../utils'

export class Improvement {
  static collection = 'improvements'
  id: string
  stage: string
  category: string | null
  content: string
  sourceIds: string[]
  producerId: string | null
  contextId: string | null
  scopeId: string | null
  createdBy: string | null
  tags: string[]
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<Improvement>) {
    this.id = data?.id || generateUUID()
    this.stage = data?.stage || 'raw'
    this.category = data?.category || null
    this.content = data?.content || ''
    this.sourceIds = data?.sourceIds || []
    this.producerId = data?.producerId || null
    this.contextId = data?.contextId || null
    this.scopeId = data?.scopeId || null
    this.createdBy = data?.createdBy || null
    this.tags = data?.tags || []
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
