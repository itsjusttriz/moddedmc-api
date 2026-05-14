import { CurseForgeModpackDev } from './ModpackDeveloperObject';
import { SecureObject } from './utils/SecureObject';
export declare class CurseforgeModpack extends SecureObject {
    get id(): string;
    get name(): string;
    get dev(): CurseForgeModpackDev;
    get launcher(): string;
    get link(): any;
}
