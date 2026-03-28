"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = void 0;
const utils_1 = require("../utils");
class Scope {
    constructor(data) {
        this.access = data?.access || null;
        this.children = data?.children || [];
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.parentId = data?.parentId || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Scope = Scope;
Scope.collection = 'scopes';
//# sourceMappingURL=Scope.js.map