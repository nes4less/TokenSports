"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPass = void 0;
const utils_1 = require("../utils");
class GuestPass {
    constructor(data) {
        this.accessLink = data?.accessLink || null;
        this.claimedBy = data?.claimedBy || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.expiresAt = data?.expiresAt || null;
        this.gameId = data?.gameId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.officialType = data?.officialType || null;
        this.orgId = data?.orgId || null;
        this.payRate = data?.payRate || 0;
        this.scope = data?.scope || null;
        this.sessionId = data?.sessionId || null;
        this.status = data?.status || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.GuestPass = GuestPass;
GuestPass.collection = 'guest_passes';
//# sourceMappingURL=GuestPass.js.map