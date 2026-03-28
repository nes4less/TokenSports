"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const utils_1 = require("../utils");
class Subscription {
    constructor(data) {
        this.clonedAt = data?.clonedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.lastSyncedVersion = data?.lastSyncedVersion || null;
        this.metadata = data?.metadata || {};
        this.mode = data?.mode || null;
        this.publicationId = data?.publicationId || null;
        this.subscriberOrgId = data?.subscriberOrgId || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Subscription = Subscription;
Subscription.collection = 'subscriptions';
//# sourceMappingURL=Subscription.js.map