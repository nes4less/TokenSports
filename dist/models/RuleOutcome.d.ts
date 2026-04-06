export declare class RuleOutcome {
    static collection: string;
    id: string;
    ruleId: string;
    ruleType: string;
    outcomeType: string;
    evidenceId: string | null;
    evidenceType: string | null;
    description: string | null;
    observedBy: string | null;
    metadata: Record<string, string>;
    createdAt: string;
    constructor(data?: Partial<RuleOutcome>);
}
//# sourceMappingURL=RuleOutcome.d.ts.map