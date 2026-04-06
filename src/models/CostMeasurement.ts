import { generateDateString, generateUUID } from '../utils'

export class CostMeasurement {
  static collection = 'cost_measurements'
  id: string
  entityId: string
  entityType: string | null
  actual: number
  unit: string
  bandwidthId: string | null
  delta: number | null
  metadata: Record<string, string>
  createdAt: string
  constructor(data?: Partial<CostMeasurement>) {
    this.id = data?.id || generateUUID()
    this.entityId = data?.entityId || ''
    this.entityType = data?.entityType || null
    this.actual = data?.actual || 0
    this.unit = data?.unit || 'tokens'
    this.bandwidthId = data?.bandwidthId || null
    this.delta = data?.delta || null
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
  }
}
