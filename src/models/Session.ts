import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Session {
  static collection: string = 'sessions'
  blurhash: string | null
  complete: boolean
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  endDate: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  orgId: string | null
  startDate: string | null
  tags: Tag[]
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Session>) {
    this.blurhash = data?.blurhash || null
    this.complete = !!data?.complete
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.endDate = data?.endDate || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.orgId = data?.orgId || null
    this.startDate = data?.startDate || null
    this.tags = data?.tags || []
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
