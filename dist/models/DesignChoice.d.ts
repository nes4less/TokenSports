export declare class DesignChoice {
    static collection: string;
    id: string;
    title: string;
    description: string | null;
    scope: string;
    domain: string | null;
    preferredVariantId: string | null;
    project: string | null;
    status: string;
    createdBy: string | null;
    tags: string[];
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<DesignChoice>);
}
//# sourceMappingURL=DesignChoice.d.ts.map