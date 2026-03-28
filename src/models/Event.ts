import { generateDateString, generateUUID } from '../utils'

export class Event {
  static collection: string = 'events'
  actorId: string | null
  createdAt: string
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  layer: string | null
  manualEntry: boolean
  metadata: { [key: string]: string }
  source: string | null
  timestamp: string | null
  translations: { [key: string]: string }
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Event>) {
    this.actorId = data?.actorId || null
    this.createdAt = data?.createdAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.layer = data?.layer || null
    this.manualEntry = !!data?.manualEntry
    this.metadata = data?.metadata || {}
    this.source = data?.source || null
    this.timestamp = data?.timestamp || null
    this.translations = data?.translations || {}
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
