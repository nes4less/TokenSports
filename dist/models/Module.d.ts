import { Image } from './Image';
import { Tag } from './Tag';
export declare class Module {
    static collection: string;
    blurhash: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    id: string;
    image: string | null;
    images: Image[];
    metadata: {
        [key: string]: string;
    };
    name: string | null;
    preset: string | null;
    tags: Tag[];
    type: string | null;
    updatedAt: string;
    constructor(data?: Partial<Module>);
}
//# sourceMappingURL=Module.d.ts.map