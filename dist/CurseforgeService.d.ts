import { CurseforgeModpack } from './ModpackObject';
import { type Result } from './utils/types';
export declare class CurseforgeService {
    private http;
    constructor(token: string);
    getModpackById(addonId: number): Promise<Result<CurseforgeModpack>>;
    getChangelogById(addonId: number, fileId: number): Promise<(Error | Record<string, any> | null)[]>;
}
