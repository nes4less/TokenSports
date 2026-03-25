import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Venue {
  static collection: string = 'venues'
  active: boolean
  blurhash: string | null
  capacity: number
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  facilityId: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  pricing: { [key: string]: string }
  scoreboardUrl: string | null
  sportTags: string[]
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Venue>) {
    this.active = data?.active !== undefined ? data.active : true
    this.blurhash = data?.blurhash || null
    this.capacity = data?.capacity || 0
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.facilityId = data?.facilityId || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.pricing = data?.pricing || {}
    this.scoreboardUrl = data?.scoreboardUrl || null
    this.sportTags = data?.sportTags || []
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
