"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handshake = void 0;
const utils_1 = require("../utils");
class Handshake {
    constructor(data) {
        this.action = data?.action || null;
        this.agreedBy = data?.agreedBy || [];
        this.changes = data?.changes || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.initiatorId = data?.initiatorId || null;
        this.message = data?.message || null;
        this.metadata = data?.metadata || {};
        this.parties = data?.parties || [];
        this.required = data?.required ?? false;
        this.resolvedAt = data?.resolvedAt || null;
        this.status = data?.status || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Handshake = Handshake;
Handshake.collection = 'handshakes';
//# sourceMappingURL=Handshake.js.map