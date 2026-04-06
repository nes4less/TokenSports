import { generateDateString, generateUUID } from '../utils'

export class Goal {
  static collection = 'goals'
  id: string
  title: string
  description: string | null
  project: string | null
  position: number
  status: string
  createdBy: string | null
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<Goal>) {
    this.id = data?.id || generateUUID()
    this.title = data?.title || ''
    this.description = data?.description || null
    this.project = data?.project || null
    this.position = data?.position || 0
    this.status = data?.status || 'active'
    this.createdBy = data?.createdBy || null
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
