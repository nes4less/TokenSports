"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const utils_1 = require("../utils");
class Goal {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.title = data?.title || '';
        this.description = data?.description || null;
        this.project = data?.project || null;
        this.position = data?.position || 0;
        this.status = data?.status || 'active';
        this.createdBy = data?.createdBy || null;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.Goal = Goal;
Goal.collection = 'goals';
//# sourceMappingURL=Goal.js.map