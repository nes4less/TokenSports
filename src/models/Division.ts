import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Division {
  static collection: string = 'divisions'
  blurhash: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  image: string | null
  images: Image[]
  leagueId: string | null
  locked: boolean
  metadata: { [key: string]: string }
  name: string | null
  slotCount: number
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Division>) {
    this.blurhash = data?.blurhash || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.leagueId = data?.leagueId || null
    this.locked = !!data?.locked
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.slotCount = data?.slotCount || 0
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
