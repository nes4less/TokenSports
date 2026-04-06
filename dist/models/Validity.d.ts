export declare class Validity {
    static collection: string;
    id: string;
    entityId: string;
    entityType: string | null;
    source: string;
    risk: string;
    likelihood: number;
    potentialAccuracy: number;
    consistency: number;
    observations: number;
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    constructor(data?: Partial<Validity>);
}
//# sourceMappingURL=Validity.d.ts.map