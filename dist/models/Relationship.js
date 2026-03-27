"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relationship = void 0;
const utils_1 = require("../utils");
class Relationship {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.personId = data?.personId || null;
        this.relationshipType = data?.relationshipType || null;
        this.role = data?.role || null;
        this.status = data?.status || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Relationship = Relationship;
Relationship.collection = 'relationships';
//# sourceMappingURL=Relationship.js.map