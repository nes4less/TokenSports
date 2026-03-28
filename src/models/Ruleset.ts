import { generateDateString, generateUUID } from '../utils'
import { Rule } from './Rule'
import { Tag } from './Tag'

export class RuleSet {
  static collection: string = 'rule_sets'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  id: string
  metadata: { [key: string]: string }
  name: string | null
  preset: string | null
  rules: Rule[]
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<RuleSet>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.preset = data?.preset || null
    this.rules = (data?.rules || []).map(r => new Rule(r))
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
