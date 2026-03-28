import { Tag } from './Tag';
export declare class Scope {
    static collection: string;
    access: string | null;
    children: string[];
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    parentId: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Scope>);
}
//# sourceMappingURL=Scope.d.ts.map