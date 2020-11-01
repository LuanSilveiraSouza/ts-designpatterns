import {
	Blender,
	Toaster,
	SocketStrip,
	AirFryer,
	AirFryerAdapter,
} from './adapter';

describe('Adapter Test', () => {
	test('It should create a socketStrip and attach 110V equipments', () => {
		const socketStrip = new SocketStrip();

		expect(socketStrip.attach(new Blender())).toBe('Blender 110V ON');
		expect(socketStrip.attach(new Toaster())).toBe('Toaster 110V ON');
	});
	test('It should create a socketStrip and attach a 220V AirFryer', () => {
		const socketStrip = new SocketStrip();

		const airFryerAdapter = new AirFryerAdapter(new AirFryer);

		expect(socketStrip.attach(airFryerAdapter)).toBe('AirFryer 220V ON');
	});
});
