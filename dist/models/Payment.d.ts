export declare class Payment {
    static collection: string;
    amount: number;
    confirmedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    fromEntityId: string | null;
    fromEntityType: string | null;
    id: string;
    integrated: boolean;
    metadata: {
        [key: string]: string;
    };
    netAmount: number;
    paymentMethod: string | null;
    platformFee: number;
    purpose: string | null;
    status: string | null;
    stripePaymentId: string | null;
    toEntityId: string | null;
    toEntityType: string | null;
    updatedAt: string;
    constructor(data?: Partial<Payment>);
}
//# sourceMappingURL=Payment.d.ts.map