import { SimpleHamburguer, CheeseHamburguer, BaconHamburguer } from './decorator';

describe('Decorator Tests', () => {
	test('It should create a SimpleHamburguer and verify its methods', () => {
		const hamburguer = new SimpleHamburguer();

		expect(hamburguer.getCost()).toBe(5);
		expect(hamburguer.getIngredients()).toBe('Beef');
	});

	test('It should create a hamburguer decorated with Simple and Cheese', () => {
		const hamburguer = new CheeseHamburguer(new SimpleHamburguer);

		expect(hamburguer.hamburguer).toBeInstanceOf(SimpleHamburguer)
		expect(hamburguer.getCost()).toBe(8);
		expect(hamburguer.getIngredients()).toBe('Beef, Cheese');
	});

	test('It should create a hamburguer decorated with Simple, Cheese and Bacon', () => {
		const hamburguer = new BaconHamburguer(new CheeseHamburguer(new SimpleHamburguer));

		expect(hamburguer.hamburguer).toBeInstanceOf(CheeseHamburguer);
		expect(hamburguer.getCost()).toBe(12);
		expect(hamburguer.getIngredients()).toBe('Beef, Cheese, Bacon');
	});
});