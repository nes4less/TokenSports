"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participation = void 0;
const utils_1 = require("../utils");
class Participation {
    constructor(data) {
        this.coedStatus = data?.coedStatus || null;
        this.confirmedAt = data?.confirmedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.jerseyNumber = data?.jerseyNumber !== undefined ? data.jerseyNumber : null;
        this.manualEntry = !!data?.manualEntry;
        this.metadata = data?.metadata || {};
        this.personId = data?.personId || null;
        this.positions = data?.positions || [];
        this.role = data?.role || null;
        this.rosterId = data?.rosterId || null;
        this.rotationGroupId = data?.rotationGroupId || null;
        this.splitEven = data?.splitEven !== undefined ? data.splitEven : true;
        this.status = data?.status || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Participation = Participation;
Participation.collection = 'participations';
//# sourceMappingURL=Participation.js.map