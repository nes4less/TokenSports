import { Tag } from './Tag';
export declare class View {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    format: string | null;
    id: string;
    inputs: {
        key: string;
        label: string | null;
        type: string | null;
        required: boolean;
        defaultValue: string | null;
        params: {
            [key: string]: string;
        };
    }[];
    language: string | null;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    outputs: {
        key: string;
        label: string | null;
        type: string | null;
        format: string | null;
        destination: string | null;
    }[];
    public: boolean;
    queries: {
        queryId: string;
        position: number;
    }[];
    scopeId: string | null;
    styleId: string | null;
    tags: Tag[];
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<View>);
}
//# sourceMappingURL=View.d.ts.map