import { generateDateString, generateUUID } from '../utils'

export class AgentFlow {
  static collection = 'agent_flows'
  id: string
  name: string | null
  description: string | null
  refreshInterval: number
  contextId: string | null
  scopeId: string | null
  createdBy: string | null
  tags: string[]
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  constructor(data?: Partial<AgentFlow>) {
    this.id = data?.id || generateUUID()
    this.name = data?.name || null
    this.description = data?.description || null
    this.refreshInterval = data?.refreshInterval || 0
    this.contextId = data?.contextId || null
    this.scopeId = data?.scopeId || null
    this.createdBy = data?.createdBy || null
    this.tags = data?.tags || []
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
    this.deletedAt = data?.deletedAt || null
  }
}
