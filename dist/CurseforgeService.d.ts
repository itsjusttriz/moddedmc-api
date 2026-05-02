export declare class CurseforgeService {
    private static instance;
    static getInstance(): CurseforgeService;
    private constructor();
    private _token;
    protected hasToken(): boolean;
    setToken(token: string): this;
}
