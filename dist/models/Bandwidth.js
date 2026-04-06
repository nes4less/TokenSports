"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bandwidth = void 0;
const utils_1 = require("../utils");
class Bandwidth {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.entityId = data?.entityId || '';
        this.entityType = data?.entityType || null;
        this.predicted = data?.predicted || 0;
        this.unit = data?.unit || 'tokens';
        this.confidence = data?.confidence || 0;
        this.createdBy = data?.createdBy || null;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Bandwidth = Bandwidth;
Bandwidth.collection = 'bandwidths';
//# sourceMappingURL=Bandwidth.js.map