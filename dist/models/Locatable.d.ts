import { Tag } from './Tag';
export declare class Locatable {
    static collection: string;
    address: string | null;
    altitude: number | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    entityId: string | null;
    entityType: string | null;
    floor: string | null;
    id: string;
    indoor: boolean;
    latitude: number | null;
    longitude: number | null;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    path: string[];
    tags: Tag[];
    updatedAt: string;
    x: number | null;
    y: number | null;
    z: number | null;
    zone: string | null;
    constructor(data?: Partial<Locatable>);
}
//# sourceMappingURL=Locatable.d.ts.map