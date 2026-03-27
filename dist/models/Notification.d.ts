export declare class Notification {
    static collection: string;
    channel: string | null;
    createdAt: string;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    image: string | null;
    message: string | null;
    metadata: {
        [key: string]: string;
    };
    read: boolean;
    recipientId: string | null;
    title: string | null;
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Notification>);
}
//# sourceMappingURL=Notification.d.ts.map