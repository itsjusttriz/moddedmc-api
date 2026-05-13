const rawSymbol = Symbol.for('data');

class ModpackObject {
	#raw: Record<string, unknown>;

	constructor(data: Record<string, any>) {
		this.#raw = data;
	}

	protected get raw() {
		return this.#raw;
	}
}

export class CurseforgeModpack extends ModpackObject {
	get id() {
		return this.raw.id;
	}
}
