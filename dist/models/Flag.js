"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
const utils_1 = require("../utils");
class Flag {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.reason = data?.reason || null;
        this.status = data?.status || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Flag = Flag;
Flag.collection = 'flags';
//# sourceMappingURL=Flag.js.map