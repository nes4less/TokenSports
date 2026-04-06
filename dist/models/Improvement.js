"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Improvement = void 0;
const utils_1 = require("../utils");
class Improvement {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.stage = data?.stage || 'raw';
        this.category = data?.category || null;
        this.content = data?.content || '';
        this.sourceIds = data?.sourceIds || [];
        this.producerId = data?.producerId || null;
        this.contextId = data?.contextId || null;
        this.scopeId = data?.scopeId || null;
        this.createdBy = data?.createdBy || null;
        this.tags = data?.tags || [];
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.Improvement = Improvement;
Improvement.collection = 'improvements';
//# sourceMappingURL=Improvement.js.map