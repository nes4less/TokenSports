import { Image } from './Image';
import { Tag } from './Tag';
export declare class Game {
    static collection: string;
    awayEnrollmentId: string | null;
    blurhash: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    divisionId: string | null;
    homeEnrollmentId: string | null;
    id: string;
    image: string | null;
    images: Image[];
    locked: boolean;
    metadata: {
        [key: string]: string;
    };
    scheduledAt: string | null;
    status: string | null;
    tags: Tag[];
    updatedAt: string;
    venueId: string | null;
    constructor(data?: Partial<Game>);
}
//# sourceMappingURL=Game.d.ts.map