"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleSet = void 0;
const utils_1 = require("../utils");
const Rule_1 = require("./Rule");
class RuleSet {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.preset = data?.preset || null;
        this.rules = (data?.rules || []).map(r => new Rule_1.Rule(r));
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.RuleSet = RuleSet;
RuleSet.collection = 'rule_sets';
//# sourceMappingURL=RuleSet.js.map