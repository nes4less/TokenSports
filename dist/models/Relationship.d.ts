export declare class Relationship {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    personId: string | null;
    relationshipType: string | null;
    role: string | null;
    status: string | null;
    updatedAt: string;
    constructor(data?: Partial<Relationship>);
}
//# sourceMappingURL=Relationship.d.ts.map