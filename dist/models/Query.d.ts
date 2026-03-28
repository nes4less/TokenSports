import { Tag } from './Tag';
export declare class Query {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    filters: {
        key: string;
        value: string;
    }[];
    hidden: string[];
    id: string;
    layout: string | null;
    limit: number | null;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    positions: {
        key: string;
        position: number;
    }[];
    public: boolean;
    scope: string | null;
    search: string | null;
    sort: {
        key: string;
        direction: string;
    } | null;
    styleId: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Query>);
}
//# sourceMappingURL=Query.d.ts.map