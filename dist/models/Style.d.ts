import { Tag } from './Tag';
export declare class Style {
    static collection: string;
    background: string | null;
    bold: boolean;
    boundary: {
        color: string | null;
        width: number;
        radius: number;
        style: string | null;
    };
    cell: {
        width: number | null;
        height: number | null;
        colspan: number;
        rowspan: number;
    };
    coordinate: {
        x: number;
        y: number;
    };
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    filled: boolean;
    highlight: string | null;
    icon: string | null;
    iconColor: string | null;
    id: string;
    key: string | null;
    metadata: {
        [key: string]: string;
    };
    scope: string | null;
    tags: Tag[];
    updatedAt: string;
    constructor(data?: Partial<Style>);
}
//# sourceMappingURL=Style.d.ts.map