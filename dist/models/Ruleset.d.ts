import { Rule } from './Rule';
import { Tag } from './Tag';
export declare class RuleSet {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    preset: string | null;
    rules: Rule[];
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<RuleSet>);
}
//# sourceMappingURL=RuleSet.d.ts.map