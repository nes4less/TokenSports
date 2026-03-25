import { generateDateString, generateUUID } from '../utils'
import { ColorProfile } from './ColorProfile'
import { Tag } from './Tag'

export class Enrollment {
  static collection: string = 'enrollments'
  clonedFrom: string | null
  color: ColorProfile | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  divisionId: string | null
  id: string
  metadata: { [key: string]: string }
  participationModel: string | null
  public: boolean
  status: string | null
  tags: Tag[]
  teamId: string | null
  type: string | null
  updatedAt: string
  constructor(data?: Partial<Enrollment>) {
    this.clonedFrom = data?.clonedFrom || null
    this.color = data?.color || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.divisionId = data?.divisionId || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.participationModel = data?.participationModel || null
    this.public = data?.public !== undefined ? data.public : true
    this.status = data?.status || null
    this.tags = data?.tags || []
    this.teamId = data?.teamId || null
    this.type = data?.type || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
