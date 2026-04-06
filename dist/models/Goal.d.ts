export declare class Goal {
    static collection: string;
    id: string;
    title: string;
    description: string | null;
    project: string | null;
    position: number;
    status: string;
    createdBy: string | null;
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<Goal>);
}
//# sourceMappingURL=Goal.d.ts.map