"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
const utils_1 = require("../utils");
class League {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.modifierSetId = data?.modifierSetId || null;
        this.name = data?.name || null;
        this.orgId = data?.orgId || null;
        this.participationModel = data?.participationModel || null;
        this.registrationClose = data?.registrationClose || null;
        this.registrationOpen = data?.registrationOpen || null;
        this.rulesetId = data?.rulesetId || null;
        this.sessionId = data?.sessionId || null;
        this.slug = data?.slug || null;
        this.sportType = data?.sportType || null;
        this.status = data?.status || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.League = League;
League.collection = 'leagues';
//# sourceMappingURL=League.js.map