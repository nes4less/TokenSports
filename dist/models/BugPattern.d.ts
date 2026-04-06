export declare class BugPattern {
    static collection: string;
    id: string;
    title: string;
    description: string | null;
    cause: string | null;
    prevention: string | null;
    scope: string;
    domain: string | null;
    severity: string;
    ruleId: string | null;
    occurrences: number;
    project: string | null;
    createdBy: string | null;
    tags: string[];
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<BugPattern>);
}
//# sourceMappingURL=BugPattern.d.ts.map