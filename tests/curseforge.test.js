// tests/service.test.js
import assert from 'node:assert';
import { describe, test } from 'node:test';

import env from '../env.json' with { type: 'json' };

// Point to the compiled code in your output directory
import { CurseforgeService } from '../dist/CurseforgeService.js';

describe('CurseforgeService', () => {
	const service = new CurseforgeService(env.CF_TOKEN, true);

	test('Service class initialised correctly', () => {
		assert.strictEqual(typeof service.getModpackById, 'function');
	});

	test('Fetch Modpack test', async (t) => {
		const [err, mod] = await service.getModpackById(1266680);
		assert.strictEqual(mod.id, 1266680);
	});
});
