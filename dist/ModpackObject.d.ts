declare class ModpackObject {
    #private;
    constructor(data: Record<string, any>);
    protected get raw(): Record<string, unknown>;
}
export declare class CurseforgeModpack extends ModpackObject {
    get id(): any;
}
export {};
