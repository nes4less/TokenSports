"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = void 0;
const uuid_1 = require("uuid");
const config_1 = require("../config");
const generateUUID = () => {
    return config_1.config.generateUUID ? config_1.config.generateUUID() : (0, uuid_1.v4)();
};
exports.generateUUID = generateUUID;
//# sourceMappingURL=generateUUID.js.map