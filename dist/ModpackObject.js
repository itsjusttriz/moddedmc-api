"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseforgeModpack = void 0;
const rawSymbol = Symbol.for('data');
class ModpackObject {
    #raw;
    constructor(data) {
        this.#raw = data;
    }
    get raw() {
        return this.#raw;
    }
}
class CurseforgeModpack extends ModpackObject {
    get id() {
        return this.#raw.id;
    }
}
exports.CurseforgeModpack = CurseforgeModpack;
