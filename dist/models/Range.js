"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
const utils_1 = require("../utils");
class Range {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.inclusive = data?.inclusive ?? true;
        this.key = data?.key || null;
        this.max = data?.max ?? null;
        this.metadata = data?.metadata || {};
        this.min = data?.min ?? null;
        this.name = data?.name || null;
        this.scope = data?.scope || null;
        this.tags = data?.tags || [];
        this.unit = data?.unit || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Range = Range;
Range.collection = 'ranges';
//# sourceMappingURL=Range.js.map