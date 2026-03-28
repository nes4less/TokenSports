export declare class Message {
    static collection: string;
    body: string | null;
    createdAt: string;
    deletedAt: string | null;
    id: string;
    image: string | null;
    language: string | null;
    metadata: {
        [key: string]: string;
    };
    parentId: string | null;
    readAt: string | null;
    recipientId: string | null;
    senderId: string | null;
    threadId: string | null;
    updatedAt: string;
    constructor(data?: Partial<Message>);
}
//# sourceMappingURL=Message.d.ts.map