"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const utils_1 = require("../utils");
class Tag {
    constructor(data) {
        this.color = data?.color || (0, utils_1.generateHexColor)();
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.title = data?.title || null;
    }
}
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map