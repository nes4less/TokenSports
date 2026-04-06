"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentFlow = void 0;
const utils_1 = require("../utils");
class AgentFlow {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.name = data?.name || null;
        this.description = data?.description || null;
        this.refreshInterval = data?.refreshInterval || 0;
        this.contextId = data?.contextId || null;
        this.scopeId = data?.scopeId || null;
        this.createdBy = data?.createdBy || null;
        this.tags = data?.tags || [];
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
    }
}
exports.AgentFlow = AgentFlow;
AgentFlow.collection = 'agent_flows';
//# sourceMappingURL=AgentFlow.js.map