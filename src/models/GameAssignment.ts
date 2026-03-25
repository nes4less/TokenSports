import { generateDateString, generateUUID } from '../utils'

export class GameAssignment {
  static collection: string = 'game_assignments'
  assignmentType: string | null
  checkedInAt: string | null
  confirmedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  gameId: string | null
  id: string
  manualEntry: boolean
  metadata: { [key: string]: string }
  payRate: number
  personId: string | null
  role: string | null
  status: string | null
  subRole: string | null
  updatedAt: string
  constructor(data?: Partial<GameAssignment>) {
    this.assignmentType = data?.assignmentType || null
    this.checkedInAt = data?.checkedInAt || null
    this.confirmedAt = data?.confirmedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.gameId = data?.gameId || null
    this.id = data?.id || generateUUID()
    this.manualEntry = !!data?.manualEntry
    this.metadata = data?.metadata || {}
    this.payRate = data?.payRate || 0
    this.personId = data?.personId || null
    this.role = data?.role || null
    this.status = data?.status || null
    this.subRole = data?.subRole || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
