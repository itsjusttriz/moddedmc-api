export declare class SecureObject {
    #private;
    constructor(data: Record<string, any>);
    protected get raw(): Record<string, unknown>;
}
