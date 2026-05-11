import { HttpClient } from './HttpClient';
import { CurseforgeError } from './utils/error';

export class CurseforgeService {
	private http: HttpClient;
	constructor(token: string) {
		const defaultHeaders = new Headers();
		defaultHeaders.append('Accept', 'application/json');
		defaultHeaders.append('x-api-key', token.trim());

		this.http = new HttpClient({
			baseUrl: 'https://api.curseforge.com',
			defaultHeaders,
		});
	}

	async getModpackById(addonId: number) {
		let [error, resp] = await this.http.getJson(`/v1/mods/${addonId}`);

		if (error)
			error = new CurseforgeError(error.message, { cause: error.cause });

		return [error, resp];
	}

	async getChangelogById(addonId: number, fileId: number) {
		let [error, resp] = await this.http.getJson(
			`/v1/mods/${addonId}/files/${fileId}/changelog`
		);

		if (error)
			error = new CurseforgeError(error.message, { cause: error.cause });

		return [error, resp];
	}
}
