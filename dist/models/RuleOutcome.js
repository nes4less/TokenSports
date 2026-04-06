"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleOutcome = void 0;
const utils_1 = require("../utils");
class RuleOutcome {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.ruleId = data?.ruleId || '';
        this.ruleType = data?.ruleType || 'design_choice';
        this.outcomeType = data?.outcomeType || 'followed';
        this.evidenceId = data?.evidenceId || null;
        this.evidenceType = data?.evidenceType || null;
        this.description = data?.description || null;
        this.observedBy = data?.observedBy || null;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
    }
}
exports.RuleOutcome = RuleOutcome;
RuleOutcome.collection = 'rule_outcomes';
//# sourceMappingURL=RuleOutcome.js.map