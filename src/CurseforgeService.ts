import { HttpClient } from './HttpClient';
import { CurseforgeModpack } from './ModpackObject';
import { CurseforgeError } from './utils/error';
import { type Result } from './utils/types';

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

	async getModpackById(addonId: number): Promise<Result<CurseforgeModpack>> {
		let [error, resp] = await this.http.getJson(`/v1/mods/${addonId}`);

		if (error || resp == null) {
			const e = new CurseforgeError(
				error?.message ??
					'Modpack data returned null. Unsure of cause.',
				{ cause: error?.cause }
			);
			return [e, null];
		}

		const dataExists = 'data' in resp && !!resp.data;
		if (!dataExists) {
			const e = new CurseforgeError(
				`Response had no data. Unsure of cause.`
			);
			return [e, null];
		}

		return [null, new CurseforgeModpack(resp.data)];
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
