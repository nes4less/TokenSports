import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class DataSource {
  static collection: string = 'datasources'
  /** Which API collection to fetch */
  collection: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  /** Human-readable description */
  description: string | null
  id: string
  metadata: { [key: string]: string }
  /** Human-readable name */
  name: string | null
  /** Priority for prefetch scheduling: high fetches eagerly, low only on demand */
  priority: string | null
  /** Optional Query ID to apply when fetching */
  queryId: string | null
  /** Refresh mode: manual (explicit), focus (on screen focus), poll (interval), event (notification-driven) */
  refreshMode: string | null
  /** Seconds between polls when refreshMode is 'poll' */
  refreshInterval: number | null
  /** Scope ID — ties this DataSource to a scope for visibility and cache keying */
  scopeId: string | null
  /** Seconds before cached data is considered stale and should be re-fetched */
  staleAfter: number | null
  tags: Tag[]
  /** Event types that should invalidate cached data (e.g. 'handshake.resolved', 'status.changed') */
  triggerOn: string[]
  updatedAt: string
  constructor(data?: Partial<DataSource>) {
    this.collection = data?.collection || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.description = data?.description || null
    this.id = data?.id || generateUUID()
    this.metadata = data?.metadata || {}
    this.name = data?.name || null
    this.priority = data?.priority || null
    this.queryId = data?.queryId || null
    this.refreshMode = data?.refreshMode || null
    this.refreshInterval = data?.refreshInterval ?? null
    this.scopeId = data?.scopeId || null
    this.staleAfter = data?.staleAfter ?? null
    this.tags = data?.tags || []
    this.triggerOn = data?.triggerOn || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
