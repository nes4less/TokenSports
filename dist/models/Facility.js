"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facility = void 0;
const utils_1 = require("../utils");
class Facility {
    constructor(data) {
        this.address = data?.address || null;
        this.amenities = data?.amenities || [];
        this.blurhash = data?.blurhash || null;
        this.color = data?.color || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.customDomain = data?.customDomain || null;
        this.email = data?.email || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.ownerId = data?.ownerId || null;
        this.phone = data?.phone || null;
        this.slug = data?.slug || null;
        this.stripeAccountId = data?.stripeAccountId || null;
        this.subdomain = data?.subdomain || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Facility = Facility;
Facility.collection = 'facilities';
//# sourceMappingURL=Facility.js.map