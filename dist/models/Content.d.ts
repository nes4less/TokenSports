import { Image } from './Image';
import { Tag } from './Tag';
export declare class Content {
    static collection: string;
    blurhash: string | null;
    category: string[];
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    published: boolean;
    section: string | null;
    slug: string | null;
    tags: Tag[];
    title: string | null;
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Content>);
}
//# sourceMappingURL=Content.d.ts.map