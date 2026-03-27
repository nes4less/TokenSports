import { Image } from './Image';
import { Tag } from './Tag';
export declare class Session {
    static collection: string;
    blurhash: string | null;
    complete: boolean;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    endDate: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    orgId: string | null;
    startDate: string | null;
    tags: Tag[];
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Session>);
}
//# sourceMappingURL=Session.d.ts.map