import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Game {
  static collection: string = 'games'
  awayEnrollmentId: string | null
  blurhash: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  divisionId: string | null
  homeEnrollmentId: string | null
  id: string
  image: string | null
  images: Image[]
  locked: boolean
  metadata: { [key: string]: string }
  scheduledAt: string | null
  status: string | null
  tags: Tag[]
  updatedAt: string
  venueId: string | null
  constructor(data?: Partial<Game>) {
    this.awayEnrollmentId = data?.awayEnrollmentId || null
    this.blurhash = data?.blurhash || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.divisionId = data?.divisionId || null
    this.homeEnrollmentId = data?.homeEnrollmentId || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.locked = !!data?.locked
    this.metadata = data?.metadata || {}
    this.scheduledAt = data?.scheduledAt || null
    this.status = data?.status || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
    this.venueId = data?.venueId || null
  }
}
