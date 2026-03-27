"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const utils_1 = require("../utils");
class Team {
    constructor(data) {
        this.blurhash = data?.blurhash || null;
        this.color = data?.color || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.metadata = data?.metadata || {};
        this.name = data?.name || null;
        this.tags = data?.tags || [];
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Team = Team;
Team.collection = 'teams';
//# sourceMappingURL=Team.js.map