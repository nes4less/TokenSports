import { generateDateString, generateUUID } from '../utils'
import { ColorProfile } from './ColorProfile'
import { Image } from './Image'
import { Tag } from './Tag'

export class Team {
  static collection: string = 'teams'
  blurhash: string | null
  color: ColorProfile | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Team>) {
    this.blurhash = data?.blurhash || null
    this.color = data?.color || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
