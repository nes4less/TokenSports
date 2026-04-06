import { generateDateString, generateUUID } from '../utils'

export class FlowAgent {
  static collection = 'flow_agents'
  id: string
  flowId: string
  agentId: string | null
  role: string
  name: string | null
  gate: string
  gateCondition: string | null
  passTo: string[]
  loopTo: string | null
  position: number
  metadata: Record<string, string>
  createdAt: string
  updatedAt: string
  constructor(data?: Partial<FlowAgent>) {
    this.id = data?.id || generateUUID()
    this.flowId = data?.flowId || ''
    this.agentId = data?.agentId || null
    this.role = data?.role || 'custom'
    this.name = data?.name || null
    this.gate = data?.gate || 'pass'
    this.gateCondition = data?.gateCondition || null
    this.passTo = data?.passTo || []
    this.loopTo = data?.loopTo || null
    this.position = data?.position || 0
    this.metadata = data?.metadata || {}
    this.createdAt = data?.createdAt || generateDateString()
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
