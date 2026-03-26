import { generateUUID } from '../utils'

export class Modifier {
  condition: string | null
  id: string
  key: string
  label: string | null
  type: string | null
  value: string | null
  constructor(data?: Partial<Modifier>) {
    this.condition = data?.condition || null
    this.id = data?.id || generateUUID()
    this.key = data?.key || ''
    this.label = data?.label || null
    this.type = data?.type || null
    this.value = data?.value || null
  }
}
