"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const utils_1 = require("../utils");
class Enrollment {
    constructor(data) {
        this.clonedFrom = data?.clonedFrom || null;
        this.color = data?.color || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.divisionId = data?.divisionId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.participationModel = data?.participationModel || null;
        this.public = data?.public !== undefined ? data.public : true;
        this.status = data?.status || null;
        this.tags = data?.tags || [];
        this.teamId = data?.teamId || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Enrollment = Enrollment;
Enrollment.collection = 'enrollments';
//# sourceMappingURL=Enrollment.js.map