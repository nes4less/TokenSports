import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Query {
  static collection: string = 'queries'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  filters: { key: string; value: string }[]
  hidden: string[]
  id: string
  layout: string | null
  limit: number | null
  metadata: { [key: string]: string }
  name: string | null
  positions: { key: string; position: number }[]
  public: boolean
  scope: string | null
  search: string | null
  sort: { key: string; direction: string } | null
  styleId: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Query>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.filters = data?.filters || []
    this.hidden = data?.hidden || []
    this.id = data?.id || generateUUID()
    this.layout = data?.layout || null
    this.limit = data?.limit ?? null
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.positions = data?.positions || []
    this.public = data?.public ?? true
    this.scope = data?.scope || null
    this.search = data?.search || null
    this.sort = data?.sort || null
    this.styleId = data?.styleId || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
