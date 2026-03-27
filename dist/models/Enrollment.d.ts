import { ColorProfile } from './ColorProfile';
import { Tag } from './Tag';
export declare class Enrollment {
    static collection: string;
    clonedFrom: string | null;
    color: ColorProfile | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    divisionId: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    participationModel: string | null;
    public: boolean;
    status: string | null;
    tags: Tag[];
    teamId: string | null;
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Enrollment>);
}
//# sourceMappingURL=Enrollment.d.ts.map