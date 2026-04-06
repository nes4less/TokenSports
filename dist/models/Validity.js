"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validity = void 0;
const utils_1 = require("../utils");
class Validity {
    constructor(data) {
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.entityId = data?.entityId || '';
        this.entityType = data?.entityType || null;
        this.source = data?.source || 'unknown';
        this.risk = data?.risk || 'none';
        this.likelihood = data?.likelihood || 0;
        this.potentialAccuracy = data?.potentialAccuracy || 1;
        this.consistency = data?.consistency || 0;
        this.observations = data?.observations || 0;
        this.metadata = data?.metadata || {};
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Validity = Validity;
Validity.collection = 'validities';
//# sourceMappingURL=Validity.js.map