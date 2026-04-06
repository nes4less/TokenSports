export declare class FlowAgent {
    static collection: string;
    id: string;
    flowId: string;
    agentId: string | null;
    role: string;
    name: string | null;
    gate: string;
    gateCondition: string | null;
    passTo: string[];
    loopTo: string | null;
    position: number;
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    constructor(data?: Partial<FlowAgent>);
}
//# sourceMappingURL=FlowAgent.d.ts.map