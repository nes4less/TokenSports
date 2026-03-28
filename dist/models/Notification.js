"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const utils_1 = require("../utils");
class Notification {
    constructor(data) {
        this.channel = data?.channel || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.language = data?.language || null;
        this.message = data?.message || null;
        this.metadata = data?.metadata || {};
        this.read = !!data?.read;
        this.recipientId = data?.recipientId || null;
        this.title = data?.title || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Notification = Notification;
Notification.collection = 'notifications';
//# sourceMappingURL=Notification.js.map