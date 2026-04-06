"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostMeasurement = void 0;
const utils_1 = require("../utils");
class CostMeasurement {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.entityId = data?.entityId || '';
        this.entityType = data?.entityType || null;
        this.actual = data?.actual || 0;
        this.unit = data?.unit || 'tokens';
        this.bandwidthId = data?.bandwidthId || null;
        this.delta = data?.delta || null;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
    }
}
exports.CostMeasurement = CostMeasurement;
CostMeasurement.collection = 'cost_measurements';
//# sourceMappingURL=CostMeasurement.js.map