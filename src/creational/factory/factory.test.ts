import { BrazilianFactory, AmericanFactory } from './factory';

describe('Factory Test', () => {
	test('It should create 2 persons and validate the toString method', () => {
		const bf = new BrazilianFactory();
		const af = new AmericanFactory();

		const personA = bf.create('luan');
		expect(personA.toString()).toBe('luan silva lives in brazil');
		expect(personA.lastName).toBe('silva');

		const personB = af.create('john');
		expect(personB.toString()).toBe('john smith lives in eua');
		expect(personB.lastName).toBe('smith');
	});
});
