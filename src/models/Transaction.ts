import { generateDateString, generateUUID } from '../utils'

export class Transaction {
  static collection: string = 'transactions'
  amount: number
  confirmedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  expiresAt: string | null
  id: string
  message: string | null
  metadata: { [key: string]: string }
  recipientId: string | null
  senderId: string | null
  status: string | null
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Transaction>) {
    this.amount = data?.amount || 0
    this.confirmedAt = data?.confirmedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.expiresAt = data?.expiresAt || null
    this.id = data?.id || generateUUID()
    this.message = data?.message || null
    this.metadata = data?.metadata || {}
    this.recipientId = data?.recipientId || null
    this.senderId = data?.senderId || null
    this.status = data?.status || null
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
