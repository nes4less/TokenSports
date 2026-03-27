"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusChange = void 0;
const utils_1 = require("../utils");
class StatusChange {
    constructor(data) {
        this.from = data?.from || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.reason = data?.reason || null;
        this.timestamp = data?.timestamp || (0, utils_1.generateDateString)();
        this.to = data?.to || null;
        this.userId = data?.userId || null;
    }
}
exports.StatusChange = StatusChange;
//# sourceMappingURL=StatusChange.js.map