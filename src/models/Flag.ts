import { generateDateString, generateUUID } from '../utils'

export class Flag {
  static collection: string = 'flags'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  metadata: { [key: string]: string }
  reason: string | null
  status: string | null
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Flag>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.reason = data?.reason || null
    this.status = data?.status || null
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
