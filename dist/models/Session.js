"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const utils_1 = require("../utils");
class Session {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.complete = !!data?.complete;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.endDate = data?.endDate || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.orgId = data?.orgId || null;
        this.startDate = data?.startDate || null;
        this.tags = data?.tags || [];
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Session = Session;
Session.collection = 'sessions';
//# sourceMappingURL=Session.js.map