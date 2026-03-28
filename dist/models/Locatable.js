"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locatable = void 0;
const utils_1 = require("../utils");
class Locatable {
    constructor(data) {
        this.address = data?.address || null;
        this.altitude = data?.altitude ?? null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.description = data?.description || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.floor = data?.floor || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.indoor = data?.indoor ?? false;
        this.latitude = data?.latitude ?? null;
        this.longitude = data?.longitude ?? null;
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.path = data?.path || [];
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.x = data?.x ?? null;
        this.y = data?.y ?? null;
        this.z = data?.z ?? null;
        this.zone = data?.zone || null;
    }
}
exports.Locatable = Locatable;
Locatable.collection = 'locatables';
//# sourceMappingURL=Locatable.js.map