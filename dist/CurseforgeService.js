"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseforgeService = void 0;
const HttpClient_1 = require("./HttpClient");
const ModpackObject_1 = require("./ModpackObject");
const error_1 = require("./utils/error");
class CurseforgeService {
    http;
    constructor(token) {
        const defaultHeaders = new Headers();
        defaultHeaders.append('Accept', 'application/json');
        defaultHeaders.append('x-api-key', token.trim());
        this.http = new HttpClient_1.HttpClient({
            baseUrl: 'https://api.curseforge.com',
            defaultHeaders,
        });
    }
    async getModpackById(addonId) {
        let [error, resp] = await this.http.getJson(`/v1/mods/${addonId}`);
        if (error || resp == null) {
            const e = new error_1.CurseforgeError(error?.message ??
                'Modpack data returned null. Unsure of cause.', { cause: error?.cause });
            return [e, null];
        }
        const dataExists = 'data' in resp && !!resp.data;
        if (!dataExists) {
            const e = new error_1.CurseforgeError(`Response had no data. Unsure of cause.`);
            return [e, null];
        }
        return [null, new ModpackObject_1.CurseforgeModpack(resp.data)];
    }
    async getChangelogById(addonId, fileId) {
        let [error, resp] = await this.http.getJson(`/v1/mods/${addonId}/files/${fileId}/changelog`);
        if (error)
            error = new error_1.CurseforgeError(error.message, { cause: error.cause });
        return [error, resp];
    }
}
exports.CurseforgeService = CurseforgeService;
