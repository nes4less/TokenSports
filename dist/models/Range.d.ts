import { Tag } from './Tag';
export declare class Range {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    inclusive: boolean;
    key: string | null;
    max: number | null;
    metadata: {
        [key: string]: string;
    };
    min: number | null;
    name: string | null;
    scope: string | null;
    tags: Tag[];
    unit: string | null;
    updatedAt: string;
    constructor(data?: Partial<Range>);
}
//# sourceMappingURL=Range.d.ts.map