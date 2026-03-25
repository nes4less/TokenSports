import { generateDateString, generateUUID } from '../utils'

export class Payment {
  static collection: string = 'payments'
  amount: number
  confirmedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  fromEntityId: string | null
  fromEntityType: string | null
  id: string
  integrated: boolean
  metadata: { [key: string]: string }
  netAmount: number
  paymentMethod: string | null
  platformFee: number
  purpose: string | null
  status: string | null
  stripePaymentId: string | null
  toEntityId: string | null
  toEntityType: string | null
  updatedAt: string
  constructor(data?: Partial<Payment>) {
    this.amount = data?.amount || 0
    this.confirmedAt = data?.confirmedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.fromEntityId = data?.fromEntityId || null
    this.fromEntityType = data?.fromEntityType || null
    this.id = data?.id || generateUUID()
    this.integrated = !!data?.integrated
    this.metadata = data?.metadata || {}
    this.netAmount = data?.netAmount || 0
    this.paymentMethod = data?.paymentMethod || null
    this.platformFee = data?.platformFee || 0
    this.purpose = data?.purpose || null
    this.status = data?.status || null
    this.stripePaymentId = data?.stripePaymentId || null
    this.toEntityId = data?.toEntityId || null
    this.toEntityType = data?.toEntityType || null
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
