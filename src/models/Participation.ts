import { generateDateString, generateUUID } from '../utils'

export class Participation {
  static collection: string = 'participations'
  confirmedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  id: string
  jerseyNumber: number | null
  manualEntry: boolean
  metadata: { [key: string]: string }
  personId: string | null
  positions: string[]
  role: string | null
  rosterId: string | null
  rotationGroupId: string | null
  splitEven: boolean
  status: string | null
  updatedAt: string
  constructor(data?: Partial<Participation>) {
    this.confirmedAt = data?.confirmedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.id = data?.id || generateUUID()
    this.jerseyNumber = data?.jerseyNumber !== undefined ? data.jerseyNumber : null
    this.manualEntry = !!data?.manualEntry
    this.metadata = data?.metadata || {}
    this.personId = data?.personId || null
    this.positions = data?.positions || []
    this.role = data?.role || null
    this.rosterId = data?.rosterId || null
    this.rotationGroupId = data?.rotationGroupId || null
    this.splitEven = data?.splitEven !== undefined ? data.splitEven : true
    this.status = data?.status || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
