"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const utils_1 = require("../utils");
class Transaction {
    constructor(data) {
        this.amount = data?.amount || 0;
        this.confirmedAt = data?.confirmedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.expiresAt = data?.expiresAt || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.message = data?.message || null;
        this.metadata = data?.metadata || {};
        this.recipientId = data?.recipientId || null;
        this.senderId = data?.senderId || null;
        this.status = data?.status || null;
        this.type = data?.type || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Transaction = Transaction;
Transaction.collection = 'transactions';
//# sourceMappingURL=Transaction.js.map