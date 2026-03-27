"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierSet = void 0;
const utils_1 = require("../utils");
const Modifier_1 = require("./Modifier");
class ModifierSet {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.modifiers = (data?.modifiers || []).map(m => new Modifier_1.Modifier(m));
        this.name = data?.name || null;
        this.rulesetId = data?.rulesetId || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.ModifierSet = ModifierSet;
ModifierSet.collection = 'modifier_sets';
//# sourceMappingURL=ModifierSet.js.map