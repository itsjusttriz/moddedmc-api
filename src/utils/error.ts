export class CustomError extends Error {
	constructor(message: string, opts: ErrorOptions = {}) {
		super(message, opts);

		this.name = this.constructor.name;
	}
}

export class CurseforgeError extends CustomError {}
export class FTBError extends CustomError {}
