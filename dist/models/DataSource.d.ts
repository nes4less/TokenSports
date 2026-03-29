import { Tag } from './Tag';
export declare class DataSource {
    static collection: string;
    /** Which API collection to fetch */
    collection: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    /** Human-readable description */
    description: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    /** Human-readable name */
    name: string | null;
    /** Priority for prefetch scheduling: high fetches eagerly, low only on demand */
    priority: string | null;
    /** Optional Query ID to apply when fetching */
    queryId: string | null;
    /** Refresh mode: manual (explicit), focus (on screen focus), poll (interval), event (notification-driven) */
    refreshMode: string | null;
    /** Seconds between polls when refreshMode is 'poll' */
    refreshInterval: number | null;
    /** Scope ID — ties this DataSource to a scope for visibility and cache keying */
    scopeId: string | null;
    /** Seconds before cached data is considered stale and should be re-fetched */
    staleAfter: number | null;
    tags: Tag[];
    /** Event types that should invalidate cached data (e.g. 'handshake.resolved', 'status.changed') */
    triggerOn: string[];
    updatedAt: string;
    constructor(data?: Partial<DataSource>);
}
//# sourceMappingURL=DataSource.d.ts.map