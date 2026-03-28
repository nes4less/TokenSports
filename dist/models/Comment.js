"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const utils_1 = require("../utils");
class Comment {
    constructor(data) {
        this.body = data?.body || null;
        this.closed = data?.closed ?? false;
        this.closedAt = data?.closedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.language = data?.language || null;
        this.likes = data?.likes || [];
        this.metadata = data?.metadata || {};
        this.parentId = data?.parentId || null;
        this.personId = data?.personId || null;
        this.subEntityId = data?.subEntityId || null;
        this.subEntityType = data?.subEntityType || null;
        this.tags = data?.tags || [];
        this.translations = data?.translations || {};
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Comment = Comment;
Comment.collection = 'comments';
//# sourceMappingURL=Comment.js.map