import { CurseForgeModpackDev } from './ModpackDeveloperObject';
import { SecureObject } from './utils/SecureObject';

export class CurseforgeModpack extends SecureObject {
	get id() {
		return this.raw.id as string;
	}

	get name() {
		return this.raw.name as string;
	}

	get dev() {
		const authors = this.raw.authors as Record<string, any>[];
		const [first] = authors.map((dev) => new CurseForgeModpackDev(dev));
		return first;
	}

	get launcher() {
		return 'Curseforge';
	}

	get link() {
		const links = this.raw.links as Record<string, any>;
		return links.websiteUrl;
	}
}
