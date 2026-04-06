"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowAgent = void 0;
const utils_1 = require("../utils");
class FlowAgent {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.flowId = data?.flowId || '';
        this.agentId = data?.agentId || null;
        this.role = data?.role || 'custom';
        this.name = data?.name || null;
        this.gate = data?.gate || 'pass';
        this.gateCondition = data?.gateCondition || null;
        this.passTo = data?.passTo || [];
        this.loopTo = data?.loopTo || null;
        this.position = data?.position || 0;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.FlowAgent = FlowAgent;
FlowAgent.collection = 'flow_agents';
//# sourceMappingURL=FlowAgent.js.map