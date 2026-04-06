"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceVariant = void 0;
const utils_1 = require("../utils");
class ChoiceVariant {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.choiceId = data?.choiceId || '';
        this.title = data?.title || '';
        this.description = data?.description || null;
        this.isCurrent = !!data?.isCurrent;
        this.notes = data?.notes || null;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
    }
}
exports.ChoiceVariant = ChoiceVariant;
ChoiceVariant.collection = 'choice_variants';
//# sourceMappingURL=ChoiceVariant.js.map