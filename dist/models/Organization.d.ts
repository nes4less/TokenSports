import { ColorProfile } from './ColorProfile';
import { Image } from './Image';
import { Tag } from './Tag';
export declare class Organization {
    static collection: string;
    blurhash: string | null;
    color: ColorProfile | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    customDomain: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    onboardingChecklist: {
        [key: string]: string;
    };
    slug: string | null;
    stripeAccountId: string | null;
    subdomain: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Organization>);
}
//# sourceMappingURL=Organization.d.ts.map