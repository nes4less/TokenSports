export declare class GuestPass {
    static collection: string;
    accessLink: string | null;
    claimedBy: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    expiresAt: string | null;
    gameId: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    officialType: string | null;
    orgId: string | null;
    payRate: number;
    scope: string | null;
    sessionId: string | null;
    status: string | null;
    updatedAt: string;
    constructor(data?: Partial<GuestPass>);
}
//# sourceMappingURL=GuestPass.d.ts.map