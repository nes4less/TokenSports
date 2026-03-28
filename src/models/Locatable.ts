import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Locatable {
  static collection: string = 'locatables'
  address: string | null
  altitude: number | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  entityId: string | null
  entityType: string | null
  floor: string | null
  id: string
  indoor: boolean
  latitude: number | null
  longitude: number | null
  metadata: { [key: string]: string }
  name: string | null
  path: string[]
  tags: Tag[]
  updatedAt: string
  x: number | null
  y: number | null
  z: number | null
  zone: string | null
  constructor(data?: Partial<Locatable>) {
    this.address = data?.address || null
    this.altitude = data?.altitude ?? null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.entityId = data?.entityId || null
    this.entityType = data?.entityType || null
    this.floor = data?.floor || null
    this.id = data?.id || generateUUID()
    this.indoor = data?.indoor ?? false
    this.latitude = data?.latitude ?? null
    this.longitude = data?.longitude ?? null
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.path = data?.path || []
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
    this.x = data?.x ?? null
    this.y = data?.y ?? null
    this.z = data?.z ?? null
    this.zone = data?.zone || null
  }
}
