export declare class CostMeasurement {
    static collection: string;
    id: string;
    entityId: string;
    entityType: string | null;
    actual: number;
    unit: string;
    bandwidthId: string | null;
    delta: number | null;
    metadata: Record<string, string>;
    createdAt: string;
    constructor(data?: Partial<CostMeasurement>);
}
//# sourceMappingURL=CostMeasurement.d.ts.map