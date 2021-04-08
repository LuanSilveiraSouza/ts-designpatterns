import {
	SoftwareBuilder,
	EmbeddedSystemBuilder,
	WebAppBuilder,
} from './template';

describe('Template Method Test', () => {
	test('It should execute the derived algorithms', () => {
		const wAppBuilder = new WebAppBuilder();

		const building = wAppBuilder.templateMethod();

		expect(building[3]).toBe('Uploading code to Github Pages');
		expect(wAppBuilder).toBeInstanceOf(WebAppBuilder);
		expect(Object.getPrototypeOf(wAppBuilder)).toBeInstanceOf(
			SoftwareBuilder
		);
	});
});
