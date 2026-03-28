import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Range {
  static collection: string = 'ranges'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  entityId: string | null
  entityType: string | null
  id: string
  inclusive: boolean
  key: string | null
  max: number | null
  metadata: { [key: string]: string }
  min: number | null
  name: string | null
  scope: string | null
  tags: Tag[]
  unit: string | null
  updatedAt: string
  constructor(data?: Partial<Range>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.inclusive = data?.inclusive ?? true
    this.key = data?.key || null
    this.max = data?.max ?? null
    this.metadata = data?.metadata || {}
    this.min = data?.min ?? null
    this.name = data?.name || null
    this.scope = data?.scope || null
    this.tags = data?.tags || []
    this.unit = data?.unit || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
