"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const utils_1 = require("../utils");
class Event {
    constructor(data) {
        this.actorId = data?.actorId || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.deletedAt = data?.deletedAt || null;
        this.entityId = data?.entityId || null;
        this.entityType = data?.entityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.layer = data?.layer || null;
        this.manualEntry = !!data?.manualEntry;
        this.metadata = data?.metadata || {};
        this.source = data?.source || null;
        this.timestamp = data?.timestamp || null;
        this.translations = data?.translations || {};
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Event = Event;
Event.collection = 'events';
//# sourceMappingURL=Event.js.map