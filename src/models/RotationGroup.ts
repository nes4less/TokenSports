import { generateDateString, generateUUID } from '../utils'

export class RotationGroup {
  static collection: string = 'rotation_groups'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  metadata: { [key: string]: string }
  name: string | null
  rosterId: string | null
  updatedAt: string
  constructor(data?: Partial<RotationGroup>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.rosterId = data?.rosterId || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
