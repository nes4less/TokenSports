import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Comment {
  static collection: string = 'comments'
  body: string | null
  closed: boolean
  closedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  language: string | null
  likes: string[]
  metadata: { [key: string]: string }
  parentId: string | null
  personId: string | null
  subEntityId: string | null
  subEntityType: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Comment>) {
    this.body = data?.body || null
    this.closed = data?.closed ?? false
    this.closedAt = data?.closedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.language = data?.language || null
    this.likes = data?.likes || []
    this.metadata = data?.metadata || {}
    this.parentId = data?.parentId || null
    this.personId = data?.personId || null
    this.subEntityId = data?.subEntityId || null
    this.subEntityType = data?.subEntityType || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
