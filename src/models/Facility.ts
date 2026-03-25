import { generateDateString, generateUUID } from '../utils'
import { ColorProfile } from './ColorProfile'
import { Image } from './Image'
import { Tag } from './Tag'

export class Facility {
  static collection: string = 'facilities'
  address: string | null
  amenities: string[]
  blurhash: string | null
  color: ColorProfile | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  customDomain: string | null
  email: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  ownerId: string | null
  phone: string | null
  slug: string | null
  stripeAccountId: string | null
  subdomain: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Facility>) {
    this.address = data?.address || null
    this.amenities = data?.amenities || []
    this.blurhash = data?.blurhash || null
    this.color = data?.color || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.customDomain = data?.customDomain || null
    this.email = data?.email || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.ownerId = data?.ownerId || null
    this.phone = data?.phone || null
    this.slug = data?.slug || null
    this.stripeAccountId = data?.stripeAccountId || null
    this.subdomain = data?.subdomain || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
