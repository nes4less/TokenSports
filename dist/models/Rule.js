"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const utils_1 = require("../utils");
class Rule {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.key = data?.key || '';
        this.label = data?.label || null;
        this.type = data?.type || null;
        this.value = data?.value || null;
    }
}
exports.Rule = Rule;
//# sourceMappingURL=Rule.js.map