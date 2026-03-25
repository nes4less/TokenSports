import { generateDateString, generateUUID } from '../utils'

export class GameRecord {
  static collection: string = 'game_records'
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  gameId: string | null
  id: string
  metadata: { [key: string]: string }
  scoreAway: number
  scoreHome: number
  updatedAt: string
  verifiedAt: string | null
  verifiedBy: string | null
  constructor(data?: Partial<GameRecord>) {
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.gameId = data?.gameId || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.scoreAway = data?.scoreAway || 0
    this.scoreHome = data?.scoreHome || 0
    this.updatedAt = data?.updatedAt || generateDateString()
    this.verifiedAt = data?.verifiedAt || null
    this.verifiedBy = data?.verifiedBy || null
  }
}
