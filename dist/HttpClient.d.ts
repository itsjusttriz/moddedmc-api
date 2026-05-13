import { type Result } from './utils/types';
type ApiClientConfig = {
    baseUrl: string;
    defaultHeaders: Headers;
};
export declare class HttpClient {
    private BASE_URL;
    private DEFAULT_HEADERS;
    constructor({ baseUrl, defaultHeaders }: ApiClientConfig);
    /**
     * Public method to get a string response
     */
    getString(_url: string): Promise<Result<string>>;
    /**
     * Public method to get a json response
     */
    getJson(_url: string): Promise<Result<Record<string, any>>>;
    /**
     * Internal helper that returns the raw Response object
     */
    private _get;
}
export {};
