export class SecureObject {
	#raw: Record<string, unknown>;

	constructor(data: Record<string, any>) {
		this.#raw = data;
	}

	protected get raw() {
		return this.#raw;
	}
}