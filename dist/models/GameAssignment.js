"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameAssignment = void 0;
const utils_1 = require("../utils");
class GameAssignment {
    constructor(data) {
        this.assignmentType = data?.assignmentType || null;
        this.checkedInAt = data?.checkedInAt || null;
        this.confirmedAt = data?.confirmedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.gameId = data?.gameId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.manualEntry = !!data?.manualEntry;
        this.metadata = data?.metadata || {};
        this.payRate = data?.payRate || 0;
        this.personId = data?.personId || null;
        this.role = data?.role || null;
        this.status = data?.status || null;
        this.subRole = data?.subRole || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.GameAssignment = GameAssignment;
GameAssignment.collection = 'game_assignments';
//# sourceMappingURL=GameAssignment.js.map