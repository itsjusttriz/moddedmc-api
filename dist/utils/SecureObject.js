"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureObject = void 0;
class SecureObject {
    #raw;
    constructor(data) {
        this.#raw = data;
    }
    get raw() {
        return this.#raw;
    }
}
exports.SecureObject = SecureObject;
