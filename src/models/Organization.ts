import { generateDateString, generateUUID } from '../utils'
import { ColorProfile } from './ColorProfile'
import { Image } from './Image'
import { Tag } from './Tag'

export class Organization {
  static collection: string = 'organizations'
  blurhash: string | null
  color: ColorProfile | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  customDomain: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  name: string | null
  onboardingChecklist: { [key: string]: string }
  slug: string | null
  stripeAccountId: string | null
  subdomain: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Organization>) {
    this.blurhash = data?.blurhash || null
    this.color = data?.color || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.customDomain = data?.customDomain || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.onboardingChecklist = data?.onboardingChecklist || {}
    this.slug = data?.slug || null
    this.stripeAccountId = data?.stripeAccountId || null
    this.subdomain = data?.subdomain || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
