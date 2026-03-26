import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class League {
  static collection: string = 'leagues'
  blurhash: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  image: string | null
  images: Image[]
  metadata: { [key: string]: string }
  modifierSetId: string | null
  name: string | null
  orgId: string | null
  participationModel: string | null
  registrationClose: string | null
  registrationOpen: string | null
  rulesetId: string | null
  sessionId: string | null
  slug: string | null
  sportType: string | null
  status: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<League>) {
    this.blurhash = data?.blurhash || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.metadata = data?.metadata || {}
    this.modifierSetId = data?.modifierSetId || null
    this.name = data?.name || null
    this.orgId = data?.orgId || null
    this.participationModel = data?.participationModel || null
    this.registrationClose = data?.registrationClose || null
    this.registrationOpen = data?.registrationOpen || null
    this.rulesetId = data?.rulesetId || null
    this.sessionId = data?.sessionId || null
    this.slug = data?.slug || null
    this.sportType = data?.sportType || null
    this.status = data?.status || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
