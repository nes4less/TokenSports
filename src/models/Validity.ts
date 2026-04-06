import { generateDateString, generateUUID } from '../utils'

export class Validity {
  static collection = 'validities'
  id: string
  entityId: string
  entityType: string | null
  source: string
  risk: string
  likelihood: number
  potentialAccuracy: number
  consistency: number
  observations: number
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  constructor(data?: Partial<Validity>) {
    this.id = data?.id || generateUUID()
    this.entityId = data?.entityId || ''
    this.entityType = data?.entityType || null
    this.source = data?.source || 'unknown'
    this.risk = data?.risk || 'none'
    this.likelihood = data?.likelihood || 0
    this.potentialAccuracy = data?.potentialAccuracy || 1
    this.consistency = data?.consistency || 0
    this.observations = data?.observations || 0
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
