"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
const utils_1 = require("../utils");
class DataSource {
    constructor(data) {
        this.collection = data?.collection || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.priority = data?.priority || null;
        this.queryId = data?.queryId || null;
        this.refreshMode = data?.refreshMode || null;
        this.refreshInterval = data?.refreshInterval ?? null;
        this.scopeId = data?.scopeId || null;
        this.staleAfter = data?.staleAfter ?? null;
        this.tags = data?.tags || [];
        this.triggerOn = data?.triggerOn || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.DataSource = DataSource;
DataSource.collection = 'datasources';
//# sourceMappingURL=DataSource.js.map