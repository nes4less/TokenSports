"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const utils_1 = require("../utils");
class Style {
    constructor(data) {
        this.background = data?.background || null;
        this.bold = data?.bold ?? false;
        this.boundary = {
            color: data?.boundary?.color || null,
            width: data?.boundary?.width ?? 0,
            radius: data?.boundary?.radius ?? 0,
            style: data?.boundary?.style || null,
        };
        this.cell = {
            width: data?.cell?.width ?? null,
            height: data?.cell?.height ?? null,
            colspan: data?.cell?.colspan ?? 1,
            rowspan: data?.cell?.rowspan ?? 1,
        };
        this.coordinate = {
            x: data?.coordinate?.x ?? 0,
            y: data?.coordinate?.y ?? 0,
        };
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.filled = data?.filled ?? true;
        this.highlight = data?.highlight || null;
        this.icon = data?.icon || null;
        this.iconColor = data?.iconColor || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.key = data?.key || null;
        this.metadata = data?.metadata || {};
        this.scope = data?.scope || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Style = Style;
Style.collection = 'styles';
//# sourceMappingURL=Style.js.map