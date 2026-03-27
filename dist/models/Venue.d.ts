import { Image } from './Image';
import { Tag } from './Tag';
export declare class Venue {
    static collection: string;
    active: boolean;
    blurhash: string | null;
    capacity: number;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    facilityId: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    pricing: {
        [key: string]: string;
    };
    scoreboardUrl: string | null;
    sportTags: string[];
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Venue>);
}
//# sourceMappingURL=Venue.d.ts.map