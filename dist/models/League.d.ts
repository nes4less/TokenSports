import { Image } from './Image';
import { Tag } from './Tag';
export declare class League {
    static collection: string;
    blurhash: string | null;
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
    orgId: string | null;
    participationModel: string | null;
    registrationClose: string | null;
    registrationOpen: string | null;
    ruleSetId: string | null;
    sessionId: string | null;
    slug: string | null;
    sportType: string | null;
    status: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<League>);
}
//# sourceMappingURL=League.d.ts.map