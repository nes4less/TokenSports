import { Tag } from './Tag';
export declare class Publication {
    static collection: string;
    bundle: {
        ruleSets: unknown[];
        contexts: unknown[];
        styles: unknown[];
        queries: unknown[];
        views: unknown[];
    };
    category: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    orgId: string | null;
    tags: Tag[];
    type: string | null;
    updatedAt: string;
    version: string | null;
    visibility: string | null;
    constructor(data?: Partial<Publication>);
}
//# sourceMappingURL=Publication.d.ts.map