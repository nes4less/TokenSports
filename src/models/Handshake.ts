import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Handshake {
  static collection: string = 'handshakes'
  action: string | null
  agreedBy: string[]
  changes: { [key: string]: { from: string | null; to: string | null } }
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  initiatorId: string | null
  message: string | null
  metadata: { [key: string]: string }
  parties: string[]
  required: boolean
  resolvedAt: string | null
  status: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Handshake>) {
    this.action = data?.action || null
    this.agreedBy = data?.agreedBy || []
    this.changes = data?.changes || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.initiatorId = data?.initiatorId || null
    this.message = data?.message || null
    this.metadata = data?.metadata || {}
    this.parties = data?.parties || []
    this.required = data?.required ?? false
    this.resolvedAt = data?.resolvedAt || null
    this.status = data?.status || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
