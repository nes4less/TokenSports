"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Survey = void 0;
const utils_1 = require("../utils");
class Survey {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.deadline = data?.deadline || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.message = data?.message || null;
        this.metadata = data?.metadata || {};
        this.options = data?.options || [];
        this.recipientIds = data?.recipientIds || [];
        this.responses = data?.responses || [];
        this.senderId = data?.senderId || null;
        this.status = data?.status || 'draft';
        this.title = data?.title || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Survey = Survey;
Survey.collection = 'surveys';
//# sourceMappingURL=Survey.js.map