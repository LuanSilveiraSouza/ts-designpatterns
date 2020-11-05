import { Halo, Gow, Ps4, XboxOne } from './bridge';

describe('Bridge Test', () => {
	test('It should instantiate Games with its Platform', () => {
		const halo = new Halo(new XboxOne());
		const gow = new Gow(new Ps4());

		expect(halo.toString()).toBe('Halo 4 playing on Xbox One');
		expect(gow.toString()).toBe('God of War playing on PS4');
	})
})