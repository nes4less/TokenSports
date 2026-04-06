export declare class Todo {
    static collection: string;
    id: string;
    title: string;
    description: string | null;
    project: string | null;
    domain: string | null;
    priority: string;
    status: string;
    sourceId: string | null;
    sourceType: string | null;
    createdBy: string | null;
    tags: string[];
    metadata: Record<string, string>;
    completedAt: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    constructor(data?: Partial<Todo>);
}
//# sourceMappingURL=Todo.d.ts.map