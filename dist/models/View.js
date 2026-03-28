"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const utils_1 = require("../utils");
class View {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.format = data?.format || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.public = data?.public ?? true;
        this.queries = data?.queries || [];
        this.styleId = data?.styleId || null;
        this.tags = data?.tags || [];
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.View = View;
View.collection = 'views';
//# sourceMappingURL=View.js.map