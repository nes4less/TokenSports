"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const utils_1 = require("../utils");
class Todo {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.title = data?.title || '';
        this.description = data?.description || null;
        this.project = data?.project || null;
        this.domain = data?.domain || null;
        this.priority = data?.priority || 'medium';
        this.status = data?.status || 'open';
        this.sourceId = data?.sourceId || null;
        this.sourceType = data?.sourceType || null;
        this.createdBy = data?.createdBy || null;
        this.tags = data?.tags || [];
        this.metadata = data?.metadata || {};
        this.completedAt = data?.completedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.Todo = Todo;
Todo.collection = 'todos';
//# sourceMappingURL=Todo.js.map