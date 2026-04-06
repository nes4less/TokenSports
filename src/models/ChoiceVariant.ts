import { generateDateString, generateUUID } from '../utils'

export class ChoiceVariant {
  static collection = 'choice_variants'
  id: string
  choiceId: string
  title: string
  description: string | null
  isCurrent: boolean
  notes: string | null
  metadata: Record<string, string>
  createdAt: string
  constructor(data?: Partial<ChoiceVariant>) {
    this.id = data?.id || generateUUID()
    this.choiceId = data?.choiceId || ''
    this.title = data?.title || ''
    this.description = data?.description || null
    this.isCurrent = !!data?.isCurrent
    this.notes = data?.notes || null
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
  }
}
