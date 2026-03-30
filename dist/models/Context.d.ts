import { Tag } from './Tag';
export declare class Context {
    static collection: string;
    approval: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    filter: string | null;
    id: string;
    implications: string | null;
    key: string | null;
    language: string | null;
    metadata: {
        [key: string]: string;
    };
    /** Parent context ID for grouping (context-in-context) */
    parentId: string | null;
    params: {
        [key: string]: string;
    };
    position: number;
    public: boolean;
    questions: string[];
    scope: string | null;
    /** Scope ID — ties this context to a specific Scope in the org hierarchy */
    scopeId: string | null;
    sort: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Context>);
}
//# sourceMappingURL=Context.d.ts.map