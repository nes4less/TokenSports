"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationGroup = void 0;
const utils_1 = require("../utils");
class RotationGroup {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.rosterId = data?.rosterId || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.RotationGroup = RotationGroup;
RotationGroup.collection = 'rotation_groups';
//# sourceMappingURL=RotationGroup.js.map