export declare class Participation {
    static collection: string;
    coedStatus: 'male' | 'female' | null;
    confirmedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    jerseyNumber: number | null;
    manualEntry: boolean;
    metadata: {
        [key: string]: string;
    };
    personId: string | null;
    positions: string[];
    role: string | null;
    rosterId: string | null;
    rotationGroupId: string | null;
    splitEven: boolean;
    status: string | null;
    updatedAt: string;
    constructor(data?: Partial<Participation>);
}
//# sourceMappingURL=Participation.d.ts.map