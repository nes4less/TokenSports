import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class View {
  static collection: string = 'views'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  format: string | null
  id: string
  inputs: { key: string; label: string | null; type: string | null; required: boolean; defaultValue: string | null; params: { [key: string]: string } }[]
  language: string | null
  metadata: { [key: string]: string }
  name: string | null
  outputs: { key: string; label: string | null; type: string | null; format: string | null; destination: string | null }[]
  public: boolean
  queries: { queryId: string; position: number }[]
  scopeId: string | null
  styleId: string | null
  tags: Tag[]
  type: string | null
  updatedAt: string
  constructor(data?: Partial<View>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.format = data?.format || null
    this.id = data?.id || generateUUID()
    this.inputs = data?.inputs || []
    this.language = data?.language || null
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.outputs = data?.outputs || []
    this.public = data?.public ?? true
    this.queries = data?.queries || []
    this.scopeId = data?.scopeId || null
    this.styleId = data?.styleId || null
    this.tags = data?.tags || []
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
