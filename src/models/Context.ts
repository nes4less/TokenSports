import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Context {
  static collection: string = 'contexts'
  approval: string | null
  color: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  description: string | null
  filter: string | null
  icon: string | null
  id: string
  implications: string | null
  key: string | null
  metadata: { [key: string]: string }
  params: { [key: string]: string }
  position: number
  public: boolean
  questions: string[]
  scope: string | null
  sort: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Context>) {
    this.approval = data?.approval || null
    this.color = data?.color || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.filter = data?.filter || null
    this.icon = data?.icon || null
    this.id = data?.id || generateUUID()
    this.implications = data?.implications || null
    this.key = data?.key || null
    this.metadata = data?.metadata || {}
    this.params = data?.params || {}
    this.position = data?.position ?? 0
    this.public = data?.public ?? true
    this.questions = data?.questions || []
    this.scope = data?.scope || null
    this.sort = data?.sort || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
