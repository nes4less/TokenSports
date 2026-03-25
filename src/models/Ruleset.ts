import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Ruleset {
  static collection: string = 'rulesets'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  metadata: { [key: string]: string }
  name: string | null
  participationModel: string | null
  preset: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Ruleset>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.participationModel = data?.participationModel || null
    this.preset = data?.preset || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
