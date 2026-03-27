import { Tag } from './Tag';
export declare class Roster {
    static collection: string;
    clonedFrom: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    enrollmentId: string | null;
    id: string;
    locked: boolean;
    lockedAt: string | null;
    metadata: {
        [key: string]: string;
    };
    tags: Tag[];
    teamId: string | null;
    updatedAt: string;
    constructor(data?: Partial<Roster>);
}
//# sourceMappingURL=Roster.d.ts.map