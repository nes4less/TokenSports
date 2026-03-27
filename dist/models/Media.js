"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const utils_1 = require("../utils");
class Media {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.tags = data?.tags || [];
        this.thumbnailUrl = data?.thumbnailUrl || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.uploadedBy = data?.uploadedBy || null;
        this.url = data?.url || null;
        this.visible = data?.visible !== undefined ? data.visible : true;
    }
}
exports.Media = Media;
Media.collection = 'media';
//# sourceMappingURL=Media.js.map