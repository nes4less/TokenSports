export declare class Survey {
    static collection: string;
    createdAt: string;
    deadline: string | null;
    deletedAt: string | null;
    id: string;
    message: string | null;
    metadata: {
        [key: string]: string;
    };
    options: string[];
    recipientIds: string[];
    responses: {
        personId: string;
        choice: string;
        respondedAt: string;
    }[];
    senderId: string | null;
    status: string;
    title: string | null;
    updatedAt: string;
    constructor(data?: Partial<Survey>);
}
//# sourceMappingURL=Survey.d.ts.map