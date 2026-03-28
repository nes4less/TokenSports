import { Tag } from './Tag';
export declare class Handshake {
    static collection: string;
    action: string | null;
    agreedBy: string[];
    changes: {
        [key: string]: {
            from: string | null;
            to: string | null;
        };
    };
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    entityId: string | null;
    entityType: string | null;
    id: string;
    initiatorId: string | null;
    message: string | null;
    metadata: {
        [key: string]: string;
    };
    parties: string[];
    required: boolean;
    resolvedAt: string | null;
    status: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Handshake>);
}
//# sourceMappingURL=Handshake.d.ts.map