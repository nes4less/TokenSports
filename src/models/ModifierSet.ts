import { generateDateString, generateUUID } from '../utils'
import { Modifier } from './Modifier'
import { Tag } from './Tag'

export class ModifierSet {
  static collection: string = 'modifier_sets'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  id: string
  metadata: { [key: string]: string }
  modifiers: Modifier[]
  name: string | null
  rulesetId: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<ModifierSet>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.modifiers = (data?.modifiers || []).map(m => new Modifier(m))
    this.name = data?.name || null
    this.rulesetId = data?.rulesetId || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
