"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRecord = void 0;
const utils_1 = require("../utils");
class GameRecord {
    constructor(data) {
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.gameId = data?.gameId || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.metadata = data?.metadata || {};
        this.scoreAway = data?.scoreAway || 0;
        this.scoreHome = data?.scoreHome || 0;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.verifiedAt = data?.verifiedAt || null;
        this.verifiedBy = data?.verifiedBy || null;
    }
}
exports.GameRecord = GameRecord;
GameRecord.collection = 'game_records';
//# sourceMappingURL=GameRecord.js.map