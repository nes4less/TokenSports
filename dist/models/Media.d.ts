import { Tag } from './Tag';
export declare class Media {
    static collection: string;
    blurhash: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    tags: Tag[];
    thumbnailUrl: string | null;
    type: string | null;
    updatedAt: string;
    uploadedBy: string | null;
    url: string | null;
    visible: boolean;
    constructor(data?: Partial<Media>);
}
//# sourceMappingURL=Media.d.ts.map