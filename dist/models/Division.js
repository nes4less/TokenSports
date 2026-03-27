"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
const utils_1 = require("../utils");
class Division {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.leagueId = data?.leagueId || null;
        this.locked = !!data?.locked;
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.slotCount = data?.slotCount || 0;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Division = Division;
Division.collection = 'divisions';
//# sourceMappingURL=Division.js.map