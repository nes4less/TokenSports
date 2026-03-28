import { Tag } from './Tag';
export declare class Subscription {
    static collection: string;
    clonedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    lastSyncedVersion: string | null;
    metadata: {
        [key: string]: string;
    };
    mode: string | null;
    publicationId: string | null;
    subscriberOrgId: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Subscription>);
}
//# sourceMappingURL=Subscription.d.ts.map