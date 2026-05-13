"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    BASE_URL;
    DEFAULT_HEADERS;
    constructor({ baseUrl, defaultHeaders }) {
        const urlString = baseUrl.trim();
        this.BASE_URL = new URL(urlString.endsWith('/') ? urlString : `${urlString}/`);
        this.DEFAULT_HEADERS = defaultHeaders;
    }
    /**
     * Public method to get a string response
     */
    async getString(_url) {
        const [error, response] = await this._get(_url);
        if (error)
            return [error, null];
        try {
            const text = await response.text();
            return [null, text];
        }
        catch (error) {
            return [
                error instanceof Error
                    ? error
                    : new Error('Failed to parse text'),
                null,
            ];
        }
    }
    /**
     * Public method to get a json response
     */
    async getJson(_url) {
        const [error, response] = await this._get(_url);
        if (error)
            return [error, null];
        try {
            const json = await response.json();
            return [null, json];
        }
        catch (error) {
            return [
                error instanceof Error
                    ? error
                    : new Error('Failed to parse json'),
                null,
            ];
        }
    }
    /**
     * Internal helper that returns the raw Response object
     */
    async _get(_url, _headers) {
        const headers = new Headers(this.DEFAULT_HEADERS);
        if (_headers) {
            _headers.forEach((value, key) => {
                headers.append(key, value);
            });
        }
        const url = new URL(_url, this.BASE_URL);
        try {
            const response = await fetch(url, {
                headers: Object.fromEntries(headers.entries()),
            });
            if (!response.ok) {
                throw new Error(`Response was not OK: ${response.status} ${response.statusText}`);
            }
            return [null, response];
        }
        catch (error) {
            return [
                error instanceof Error ? error : new Error(String(error)),
                null,
            ];
        }
    }
}
exports.HttpClient = HttpClient;
