import { generateDateString, generateUUID } from '../utils'

export class StatusChange {
  from: string | null
  id: string
  reason: string | null
  timestamp: string
  to: string | null
  userId: string | null
  constructor(data?: Partial<StatusChange>) {
    this.from = data?.from || null
    this.id = data?.id || generateUUID()
    this.reason = data?.reason || null
    this.timestamp = data?.timestamp || generateDateString()
    this.to = data?.to || null
    this.userId = data?.userId || null
  }
}
