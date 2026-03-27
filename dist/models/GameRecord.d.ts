export declare class GameRecord {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    gameId: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    scoreAway: number;
    scoreHome: number;
    updatedAt: string;
    verifiedAt: string | null;
    verifiedBy: string | null;
    constructor(data?: Partial<GameRecord>);
}
//# sourceMappingURL=GameRecord.d.ts.map