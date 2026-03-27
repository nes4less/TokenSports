export declare class Event {
    static collection: string;
    actorId: string | null;
    createdAt: string;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    layer: string | null;
    manualEntry: boolean;
    metadata: {
        [key: string]: string;
    };
    source: string | null;
    timestamp: string | null;
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Event>);
}
//# sourceMappingURL=Event.d.ts.map