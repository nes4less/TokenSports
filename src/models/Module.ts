import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Module {
  static collection: string = 'modules'
  blurhash: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  preset: string | null
  tags: Tag[]
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Module>) {
    this.blurhash = data?.blurhash || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.preset = data?.preset || null
    this.tags = data?.tags || []
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
