"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleset = void 0;
const utils_1 = require("../utils");
class Ruleset {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.participationModel = data?.participationModel || null;
        this.preset = data?.preset || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Ruleset = Ruleset;
Ruleset.collection = 'rulesets';
//# sourceMappingURL=Ruleset.js.map