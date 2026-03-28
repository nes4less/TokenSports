import { Tag } from './Tag';
export declare class Comment {
    static collection: string;
    body: string | null;
    closed: boolean;
    closedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    language: string | null;
    likes: string[];
    metadata: {
        [key: string]: string;
    };
    parentId: string | null;
    personId: string | null;
    subEntityId: string | null;
    subEntityType: string | null;
    tags: Tag[];
    translations: {
        [key: string]: string;
    };
    updatedAt: string;
    constructor(data?: Partial<Comment>);
}
//# sourceMappingURL=Comment.d.ts.map