import { generateDateString, generateUUID } from '../utils'

export class Bandwidth {
  static collection = 'bandwidths'
  id: string
  entityId: string
  entityType: string | null
  predicted: number
  unit: string
  confidence: number
  createdBy: string | null
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  constructor(data?: Partial<Bandwidth>) {
    this.id = data?.id || generateUUID()
    this.entityId = data?.entityId || ''
    this.entityType = data?.entityType || null
    this.predicted = data?.predicted || 0
    this.unit = data?.unit || 'tokens'
    this.confidence = data?.confidence || 0
    this.createdBy = data?.createdBy || null
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
