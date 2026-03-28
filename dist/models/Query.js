"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const utils_1 = require("../utils");
class Query {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.filters = data?.filters || [];
        this.hidden = data?.hidden || [];
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.layout = data?.layout || null;
        this.limit = data?.limit ?? null;
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.positions = data?.positions || [];
        this.public = data?.public ?? true;
        this.scope = data?.scope || null;
        this.search = data?.search || null;
        this.sort = data?.sort || null;
        this.styleId = data?.styleId || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Query = Query;
Query.collection = 'queries';
//# sourceMappingURL=Query.js.map