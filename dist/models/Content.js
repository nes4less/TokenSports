"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const utils_1 = require("../utils");
class Content {
    constructor(data) {
        this.attachments = data?.attachments || [];
        this.blurhash = data?.blurhash || null;
        this.category = data?.category || [];
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.expiresAt = data?.expiresAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.language = data?.language || null;
        this.metadata = data?.metadata || {};
        this.published = !!data?.published;
        this.section = data?.section || null;
        this.slug = data?.slug || null;
        this.tags = data?.tags || [];
        this.title = data?.title || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Content = Content;
Content.collection = 'content';
//# sourceMappingURL=Content.js.map