import { generateDateString, generateUUID } from '../utils'

export class Notification {
  static collection: string = 'notifications'
  channel: string | null
  createdAt: string
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  image: string | null
  language: string | null
  message: string | null
  metadata: { [key: string]: string }
  read: boolean
  recipientId: string | null
  title: string | null
  translations: { [key: string]: string }
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Notification>) {
    this.channel = data?.channel || null
    this.createdAt = data?.createdAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.language = data?.language || null
    this.message = data?.message || null
    this.metadata = data?.metadata || {}
    this.read = !!data?.read
    this.recipientId = data?.recipientId || null
    this.title = data?.title || null
    this.translations = data?.translations || {}
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
