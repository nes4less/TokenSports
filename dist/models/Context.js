"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const utils_1 = require("../utils");
class Context {
    constructor(data) {
        this.approval = data?.approval || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.filter = data?.filter || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.implications = data?.implications || null;
        this.key = data?.key || null;
        this.language = data?.language || null;
        this.metadata = data?.metadata || {};
        this.params = data?.params || {};
        this.position = data?.position ?? 0;
        this.public = data?.public ?? true;
        this.questions = data?.questions || [];
        this.scope = data?.scope || null;
        this.sort = data?.sort || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Context = Context;
Context.collection = 'contexts';
//# sourceMappingURL=Context.js.map