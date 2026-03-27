import { ColorProfile } from './ColorProfile';
import { Image } from './Image';
import { Tag } from './Tag';
export declare class Team {
    static collection: string;
    blurhash: string | null;
    color: ColorProfile | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Team>);
}
//# sourceMappingURL=Team.d.ts.map