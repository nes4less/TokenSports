import { generateDateString, generateUUID } from '../utils'

export class GuestPass {
  static collection: string = 'guest_passes'
  accessLink: string | null
  claimedBy: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  expiresAt: string | null
  gameId: string | null
  id: string
  metadata: { [key: string]: string }
  officialType: string | null
  orgId: string | null
  payRate: number
  scope: string | null
  sessionId: string | null
  status: string | null
  updatedAt: string
  constructor(data?: Partial<GuestPass>) {
    this.accessLink = data?.accessLink || null
    this.claimedBy = data?.claimedBy || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.expiresAt = data?.expiresAt || null
    this.gameId = data?.gameId || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.officialType = data?.officialType || null
    this.orgId = data?.orgId || null
    this.payRate = data?.payRate || 0
    this.scope = data?.scope || null
    this.sessionId = data?.sessionId || null
    this.status = data?.status || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
