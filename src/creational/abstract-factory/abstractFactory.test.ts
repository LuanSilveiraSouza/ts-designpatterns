import { HumanCharacter, HumanFactory, Mage } from './abstractFactory';

describe('Abstract Factory Test', () => {
	test('It should create a human character', () => {
		const humanFactory = new HumanFactory();

		const char = {
			race: humanFactory.makeCharacter(),
			class: humanFactory.makeRPGClass(),
		};

		expect(char.race).toBeInstanceOf(HumanCharacter);
		expect(char.race.getSkill()).toBe('Intelligence');
		expect(char.class).toBeInstanceOf(Mage);
		expect(char.class.getWeapon()).toBe('Staff');
	});
});
