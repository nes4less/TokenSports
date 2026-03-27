import { Modifier } from './Modifier';
import { Tag } from './Tag';
export declare class ModifierSet {
    static collection: string;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    description: string | null;
    id: string;
    metadata: {
        [key: string]: string;
    };
    modifiers: Modifier[];
    name: string | null;
    rulesetId: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<ModifierSet>);
}
//# sourceMappingURL=ModifierSet.d.ts.map