import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Roster {
  static collection: string = 'rosters'
  clonedFrom: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  enrollmentId: string | null
  id: string
  locked: boolean
  lockedAt: string | null
  metadata: { [key: string]: string }
  tags: Tag[]
  teamId: string | null
  updatedAt: string
  constructor(data?: Partial<Roster>) {
    this.clonedFrom = data?.clonedFrom || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.enrollmentId = data?.enrollmentId || null
    this.id = data?.id || generateUUID()
    this.locked = !!data?.locked
    this.lockedAt = data?.lockedAt || null
    this.metadata = data?.metadata || {}
    this.tags = data?.tags || []
    this.teamId = data?.teamId || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
