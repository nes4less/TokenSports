import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Scope {
  static collection: string = 'scopes'
  access: string | null
  children: string[]
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  entityId: string | null
  entityType: string | null
  id: string
  metadata: { [key: string]: string }
  name: string | null
  parentId: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Scope>) {
    this.access = data?.access || null
    this.children = data?.children || []
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.parentId = data?.parentId || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
