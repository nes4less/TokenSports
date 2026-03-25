import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Media {
  static collection: string = 'media'
  blurhash: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  entityId: string | null
  entityType: string | null
  id: string
  metadata: { [key: string]: string }
  tags: Tag[]
  thumbnailUrl: string | null
  type: string | null
  updatedAt: string
  uploadedBy: string | null
  url: string | null
  visible: boolean
  constructor(data?: Partial<Media>) {
    this.blurhash = data?.blurhash || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.tags = data?.tags || []
    this.thumbnailUrl = data?.thumbnailUrl || null
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
    this.uploadedBy = data?.uploadedBy || null
    this.url = data?.url || null
    this.visible = data?.visible !== undefined ? data.visible : true
  }
}
