"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignChoice = void 0;
const utils_1 = require("../utils");
class DesignChoice {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.title = data?.title || '';
        this.description = data?.description || null;
        this.scope = data?.scope || 'component';
        this.domain = data?.domain || null;
        this.preferredVariantId = data?.preferredVariantId || null;
        this.project = data?.project || null;
        this.status = data?.status || 'active';
        this.createdBy = data?.createdBy || null;
        this.tags = data?.tags || [];
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.DesignChoice = DesignChoice;
DesignChoice.collection = 'design_choices';
//# sourceMappingURL=DesignChoice.js.map