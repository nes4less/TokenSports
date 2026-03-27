import { ColorProfile } from './ColorProfile';
import { Image } from './Image';
import { Tag } from './Tag';
export declare class Facility {
    static collection: string;
    address: string | null;
    amenities: string[];
    blurhash: string | null;
    color: ColorProfile | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    customDomain: string | null;
    email: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    ownerId: string | null;
    phone: string | null;
    slug: string | null;
    stripeAccountId: string | null;
    subdomain: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Facility>);
}
//# sourceMappingURL=Facility.d.ts.map