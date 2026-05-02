export class CurseforgeService {
	private static instance: CurseforgeService;
	public static getInstance() {
		if (!CurseforgeService.instance)
			CurseforgeService.instance = new this();
		return CurseforgeService.instance;
	}

	private _token: string = '';
	protected hasToken() {
		return !!this._token?.length;
	}
	public setToken(token: string) {
		if (this.hasToken()) {
			// TODO: Change logger.
			console.log(
				new Date().toISOString(),
				'[CurseforgeService] Dynamic token swapping is not supported. Continuing with original token...'
			);
		} else {
			this._token = token.trim();
		}
		return this;
	}
}
