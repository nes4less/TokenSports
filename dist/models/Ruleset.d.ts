import { Tag } from './Tag';
export declare class Ruleset {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    participationModel: string | null;
    preset: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Ruleset>);
}
//# sourceMappingURL=Ruleset.d.ts.map