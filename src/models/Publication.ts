import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Publication {
  static collection: string = 'publications'
  bundle: {
    ruleSets: unknown[]
    contexts: unknown[]
    styles: unknown[]
    queries: unknown[]
    views: unknown[]
  }
  category: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  id: string
  metadata: { [key: string]: string }
  name: string | null
  orgId: string | null
  tags: Tag[]
  type: string | null
  updatedAt: string
  version: string | null
  visibility: string | null
  constructor(data?: Partial<Publication>) {
    this.bundle = {
      ruleSets: data?.bundle?.ruleSets || [],
      contexts: data?.bundle?.contexts || [],
      styles: data?.bundle?.styles || [],
      queries: data?.bundle?.queries || [],
      views: data?.bundle?.views || [],
    }
    this.category = data?.category || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.orgId = data?.orgId || null
    this.tags = data?.tags || []
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
    this.version = data?.version || null
    this.visibility = data?.visibility || null
  }
}
