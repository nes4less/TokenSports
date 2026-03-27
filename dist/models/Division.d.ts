import { Image } from './Image';
import { Tag } from './Tag';
export declare class Division {
    static collection: string;
    blurhash: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    image: string | null;
    images: Image[];
    leagueId: string | null;
    locked: boolean;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    slotCount: number;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Division>);
}
//# sourceMappingURL=Division.d.ts.map