import { generateDateString, generateUUID } from '../utils'

export class DesignChoice {
  static collection = 'design_choices'
  id: string
  title: string
  description: string | null
  scope: string
  domain: string | null
  preferredVariantId: string | null
  project: string | null
  status: string
  createdBy: string | null
  tags: string[]
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<DesignChoice>) {
    this.id = data?.id || generateUUID()
    this.title = data?.title || ''
    this.description = data?.description || null
    this.scope = data?.scope || 'component'
    this.domain = data?.domain || null
    this.preferredVariantId = data?.preferredVariantId || null
    this.project = data?.project || null
    this.status = data?.status || 'active'
    this.createdBy = data?.createdBy || null
    this.tags = data?.tags || []
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
