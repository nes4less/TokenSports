import { generateUUID } from '../utils'

export class ColorProfile {
  confirmed: boolean
  id: string
  primaryHex: string | null
  secondaryHex: string | null
  sourceImage: string | null
  constructor(data?: Partial<ColorProfile>) {
    this.confirmed = !!data?.confirmed
    this.id = data?.id || generateUUID()
    this.primaryHex = data?.primaryHex || null
    this.secondaryHex = data?.secondaryHex || null
    this.sourceImage = data?.sourceImage || null
  }
}
