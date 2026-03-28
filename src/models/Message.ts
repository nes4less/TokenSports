import { generateDateString, generateUUID } from '../utils'

export class Message {
  static collection: string = 'messages'
  body: string | null
  createdAt: string
  deletedAt: string | null
  id: string
  image: string | null
  language: string | null
  metadata: { [key: string]: string }
  parentId: string | null
  readAt: string | null
  recipientId: string | null
  senderId: string | null
  threadId: string | null
  updatedAt: string
  constructor(data?: Partial<Message>) {
    this.body = data?.body || null
    this.createdAt = data?.createdAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.language = data?.language || null
    this.metadata = data?.metadata || {}
    this.parentId = data?.parentId || null
    this.readAt = data?.readAt || null
    this.recipientId = data?.recipientId || null
    this.senderId = data?.senderId || null
    this.threadId = data?.threadId || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
