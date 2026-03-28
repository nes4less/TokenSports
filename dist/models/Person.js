"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const utils_1 = require("../utils");
class Person {
    constructor(data) {
        this.autoTranslate = data?.autoTranslate ?? false;
        this.avatarImage = data?.avatarImage || null;
        this.blurhash = data?.blurhash || null;
        this.cashBalance = data?.cashBalance || 0;
        this.claimToken = data?.claimToken || null;
        this.claimedAt = data?.claimedAt || null;
        this.createdAt = data?.createdAt || (0, utils_1.generateDateString)();
        this.createdBy = data?.createdBy || null;
        this.deletedAt = data?.deletedAt || null;
        this.dateOfBirth = data?.dateOfBirth || null;
        this.displayName = data?.displayName || null;
        this.email = data?.email || null;
        this.enabledRoles = data?.enabledRoles || ['home'];
        this.firstName = data?.firstName || null;
        this.id = data?.id || (0, utils_1.generateUUID)();
        this.image = data?.image || null;
        this.images = data?.images || [];
        this.lastActiveContext = data?.lastActiveContext || null;
        this.lastActiveRole = data?.lastActiveRole || null;
        this.lastName = data?.lastName || null;
        this.language = data?.language || null;
        this.manualEntry = !!data?.manualEntry;
        this.metadata = data?.metadata || {};
        this.middleName = data?.middleName || null;
        this.notificationPrefs = data?.notificationPrefs || {};
        this.password = data?.password || null;
        this.phone = data?.phone || null;
        this.platformBalance = data?.platformBalance || 0;
        this.profileVisibility = data?.profileVisibility || {};
        this.publicProfile = !!data?.publicProfile;
        this.stripeAccountId = data?.stripeAccountId || null;
        this.tags = data?.tags || [];
        this.themeColor = data?.themeColor || 'green';
        this.themeMode = data?.themeMode || 'dark';
        this.updatedAt = data?.updatedAt || (0, utils_1.generateDateString)();
        this.useAvatarImage = !!data?.useAvatarImage;
        this.useAvatarName = !!data?.useAvatarName;
        this.verified = !!data?.verified;
    }
}
exports.Person = Person;
Person.collection = 'persons';
//# sourceMappingURL=Person.js.map