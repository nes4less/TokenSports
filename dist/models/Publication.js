"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publication = void 0;
const utils_1 = require("../utils");
class Publication {
    constructor(data) {
        this.bundle = {
            ruleSets: data?.bundle?.ruleSets || [],
            contexts: data?.bundle?.contexts || [],
            styles: data?.bundle?.styles || [],
            queries: data?.bundle?.queries || [],
            views: data?.bundle?.views || [],
        };
        this.category = data?.category || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.orgId = data?.orgId || null;
        this.tags = data?.tags || [];
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.version = data?.version || null;
        this.visibility = data?.visibility || null;
    }
}
exports.Publication = Publication;
Publication.collection = 'publications';
//# sourceMappingURL=Publication.js.map