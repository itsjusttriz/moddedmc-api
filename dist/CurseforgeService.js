"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseforgeService = void 0;
class CurseforgeService {
    static instance;
    static getInstance() {
        if (!CurseforgeService.instance)
            CurseforgeService.instance = new this();
        return CurseforgeService.instance;
    }
    _token = '';
    hasToken() {
        return !!this._token?.length;
    }
    setToken(token) {
        if (this.hasToken()) {
            // TODO: Change logger.
            console.log(new Date().toISOString(), '[CurseforgeService] Dynamic token swapping is not supported. Continuing with original token...');
        }
        else {
            this._token = token.trim();
        }
        return this;
    }
}
exports.CurseforgeService = CurseforgeService;
