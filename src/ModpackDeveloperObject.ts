import { SecureObject } from './utils/SecureObject';

export class CurseForgeModpackDev extends SecureObject {
	get id() {
		return this.raw.id as string;
	}

	get name() {
		return this.raw.name as string;
	}

	// TODO:
	//     - url;
	//     - avatarUrl;
}
