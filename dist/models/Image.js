"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const utils_1 = require("../utils");
class Image {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.position = data?.position || 0;
        this.value = data?.value || null;
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map