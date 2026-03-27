"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venue = void 0;
const utils_1 = require("../utils");
class Venue {
    constructor(data) {
        this.active = data?.active !== undefined ? data.active : true;
        this.blurhash = data?.blurhash || null;
        this.capacity = data?.capacity || 0;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.facilityId = data?.facilityId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.pricing = data?.pricing || {};
        this.scoreboardUrl = data?.scoreboardUrl || null;
        this.sportTags = data?.sportTags || [];
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Venue = Venue;
Venue.collection = 'venues';
//# sourceMappingURL=Venue.js.map