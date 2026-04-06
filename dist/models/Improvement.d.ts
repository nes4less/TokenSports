export declare class Improvement {
    static collection: string;
    id: string;
    stage: string;
    category: string | null;
    content: string;
    sourceIds: string[];
    producerId: string | null;
    contextId: string | null;
    scopeId: string | null;
    createdBy: string | null;
    tags: string[];
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<Improvement>);
}
//# sourceMappingURL=Improvement.d.ts.map