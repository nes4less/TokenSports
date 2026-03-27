"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorProfile = void 0;
const utils_1 = require("../utils");
class ColorProfile {
    constructor(data) {
        this.confirmed = !!data?.confirmed;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.primaryHex = data?.primaryHex || null;
        this.secondaryHex = data?.secondaryHex || null;
        this.sourceImage = data?.sourceImage || null;
    }
}
exports.ColorProfile = ColorProfile;
//# sourceMappingURL=ColorProfile.js.map