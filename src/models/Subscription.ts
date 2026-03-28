import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Subscription {
  static collection: string = 'subscriptions'
  clonedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  lastSyncedVersion: string | null
  metadata: { [key: string]: string }
  mode: string | null
  publicationId: string | null
  subscriberOrgId: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Subscription>) {
    this.clonedAt = data?.clonedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.lastSyncedVersion = data?.lastSyncedVersion || null
    this.metadata = data?.metadata || {}
    this.mode = data?.mode || null
    this.publicationId = data?.publicationId || null
    this.subscriberOrgId = data?.subscriberOrgId || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
