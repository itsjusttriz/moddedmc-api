"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTBError = exports.CurseforgeError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, opts = {}) {
        super(message, opts);
        this.name = this.constructor.name;
    }
}
exports.CustomError = CustomError;
class CurseforgeError extends CustomError {
}
exports.CurseforgeError = CurseforgeError;
class FTBError extends CustomError {
}
exports.FTBError = FTBError;
