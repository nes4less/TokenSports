"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const utils_1 = require("../utils");
class Game {
    constructor(data) {
        this.awayEnrollmentId = data?.awayEnrollmentId || null;
        this.blurhash = data?.blurhash || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.divisionId = data?.divisionId || null;
        this.homeEnrollmentId = data?.homeEnrollmentId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.locked = !!data?.locked;
        this.metadata = data?.metadata || {};
        this.scheduledAt = data?.scheduledAt || null;
        this.status = data?.status || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.venueId = data?.venueId || null;
    }
}
exports.Game = Game;
Game.collection = 'games';
//# sourceMappingURL=Game.js.map