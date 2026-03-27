"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roster = void 0;
const utils_1 = require("../utils");
class Roster {
    constructor(data) {
        this.clonedFrom = data?.clonedFrom || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.enrollmentId = data?.enrollmentId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.locked = !!data?.locked;
        this.lockedAt = data?.lockedAt || null;
        this.metadata = data?.metadata || {};
        this.tags = data?.tags || [];
        this.teamId = data?.teamId || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Roster = Roster;
Roster.collection = 'rosters';
//# sourceMappingURL=Roster.js.map