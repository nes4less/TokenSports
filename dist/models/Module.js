"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const utils_1 = require("../utils");
class Module {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.preset = data?.preset || null;
        this.tags = data?.tags || [];
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Module = Module;
Module.collection = 'modules';
//# sourceMappingURL=Module.js.map