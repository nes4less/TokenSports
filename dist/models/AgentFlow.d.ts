export declare class AgentFlow {
    static collection: string;
    id: string;
    name: string | null;
    description: string | null;
    refreshInterval: number;
    contextId: string | null;
    scopeId: string | null;
    createdBy: string | null;
    tags: string[];
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<AgentFlow>);
}
//# sourceMappingURL=AgentFlow.d.ts.map