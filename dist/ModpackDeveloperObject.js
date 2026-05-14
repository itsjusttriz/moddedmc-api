"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseForgeModpackDev = void 0;
const SecureObject_1 = require("./utils/SecureObject");
class CurseForgeModpackDev extends SecureObject_1.SecureObject {
    get id() {
        return this.raw.id;
    }
    get name() {
        return this.raw.name;
    }
}
exports.CurseForgeModpackDev = CurseForgeModpackDev;
