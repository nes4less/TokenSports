"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const utils_1 = require("../utils");
class Message {
    constructor(data) {
        this.body = data?.body || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.language = data?.language || null;
        this.metadata = data?.metadata || {};
        this.parentId = data?.parentId || null;
        this.readAt = data?.readAt || null;
        this.recipientId = data?.recipientId || null;
        this.senderId = data?.senderId || null;
        this.threadId = data?.threadId || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Message = Message;
Message.collection = 'messages';
//# sourceMappingURL=Message.js.map