import { generateDateString, generateUUID } from '../utils'

export class RuleOutcome {
  static collection = 'rule_outcomes'
  id: string
  ruleId: string
  ruleType: string
  outcomeType: string
  evidenceId: string | null
  evidenceType: string | null
  description: string | null
  observedBy: string | null
  metadata: Record<string, string>
  createdAt: string
  constructor(data?: Partial<RuleOutcome>) {
    this.id = data?.id || generateUUID()
    this.ruleId = data?.ruleId || ''
    this.ruleType = data?.ruleType || 'design_choice'
    this.outcomeType = data?.outcomeType || 'followed'
    this.evidenceId = data?.evidenceId || null
    this.evidenceType = data?.evidenceType || null
    this.description = data?.description || null
    this.observedBy = data?.observedBy || null
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
  }
}
