export declare class Transaction {
    static collection: string;
    amount: number;
    confirmedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    expiresAt: string | null;
    id: string;
    message: string | null;
    metadata: {
        [key: string]: string;
    };
    recipientId: string | null;
    senderId: string | null;
    status: string | null;
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Transaction>);
}
//# sourceMappingURL=Transaction.d.ts.map