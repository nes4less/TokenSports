import { generateDateString, generateUUID } from '../utils'

export class Survey {
  static collection: string = 'surveys'
  createdAt: string
  deadline: string | null
  deletedAt: string | null
  id: string
  message: string | null
  metadata: { [key: string]: string }
  options: string[]
  recipientIds: string[]
  responses: { personId: string; choice: string; respondedAt: string }[]
  senderId: string | null
  status: string
  title: string | null
  updatedAt: string
  constructor(data?: Partial<Survey>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.deadline = data?.deadline || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.message = data?.message || null
    this.metadata = data?.metadata || {}
    this.options = data?.options || []
    this.recipientIds = data?.recipientIds || []
    this.responses = data?.responses || []
    this.senderId = data?.senderId || null
    this.status = data?.status || 'draft'
    this.title = data?.title || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
