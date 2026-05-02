export declare class CurseforgeService {
    private static instance;
    static getInstance(): CurseforgeService;
    private _token;
    protected hasToken(): boolean;
    setToken(token: string): this;
}
