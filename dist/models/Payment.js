"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const utils_1 = require("../utils");
class Payment {
    constructor(data) {
        this.amount = data?.amount || 0;
        this.confirmedAt = data?.confirmedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.fromEntityId = data?.fromEntityId || null;
        this.fromEntityType = data?.fromEntityType || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.integrated = !!data?.integrated;
        this.metadata = data?.metadata || {};
        this.netAmount = data?.netAmount || 0;
        this.paymentMethod = data?.paymentMethod || null;
        this.platformFee = data?.platformFee || 0;
        this.purpose = data?.purpose || null;
        this.status = data?.status || null;
        this.stripePaymentId = data?.stripePaymentId || null;
        this.toEntityId = data?.toEntityId || null;
        this.toEntityType = data?.toEntityType || null;
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
    }
}
exports.Payment = Payment;
Payment.collection = 'payments';
//# sourceMappingURL=Payment.js.map