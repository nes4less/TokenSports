import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Content {
  static collection: string = 'content'
  attachments: { url: string; name: string; type: string; size?: number }[]
  blurhash: string | null
  category: string[]
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  expiresAt: string | null
  id: string
  image: string | null
  images: Image[]
  language: string | null
  metadata: { [key: string]: string }
  published: boolean
  section: string | null
  slug: string | null
  tags: Tag[]
  title: string | null
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Content>) {
    this.attachments = data?.attachments || []
    this.blurhash = data?.blurhash || null
    this.category = data?.category || []
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.expiresAt = data?.expiresAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.language = data?.language || null
    this.metadata = data?.metadata || {}
    this.published = !!data?.published
    this.section = data?.section || null
    this.slug = data?.slug || null
    this.tags = data?.tags || []
    this.title = data?.title || null
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
