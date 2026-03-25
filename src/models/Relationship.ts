import { generateDateString, generateUUID } from '../utils'

export class Relationship {
  static collection: string = 'relationships'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  metadata: { [key: string]: string }
  personId: string | null
  relationshipType: string | null
  role: string | null
  status: string | null
  updatedAt: string
  constructor(data?: Partial<Relationship>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.personId = data?.personId || null
    this.relationshipType = data?.relationshipType || null
    this.role = data?.role || null
    this.status = data?.status || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
