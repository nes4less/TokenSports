"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BugPattern = void 0;
const utils_1 = require("../utils");
class BugPattern {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.title = data?.title || '';
        this.description = data?.description || null;
        this.cause = data?.cause || null;
        this.prevention = data?.prevention || null;
        this.scope = data?.scope || 'component';
        this.domain = data?.domain || null;
        this.severity = data?.severity || 'medium';
        this.ruleId = data?.ruleId || null;
        this.occurrences = data?.occurrences || 1;
        this.project = data?.project || null;
        this.createdBy = data?.createdBy || null;
        this.tags = data?.tags || [];
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.BugPattern = BugPattern;
BugPattern.collection = 'bug_patterns';
//# sourceMappingURL=BugPattern.js.map