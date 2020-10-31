import {
	House,
	HouseDirector,
	HouseWithGardenBuilder,
	HouseTwoFloorsWithPool,
} from './builder';

describe('Builder Test', () => {
	test('It should verify House fields', () => {
		const house = new House();

		expect(house).toHaveProperty('pool');
		expect(house).toHaveProperty('garden');
		expect(house).toHaveProperty('floors');
		expect(house).toHaveProperty('setPool');
		expect(house).toHaveProperty('setGarden');
		expect(house).toHaveProperty('setFloors');
		expect(house).toHaveProperty('toString');
	});

	test('It should use a HouseDirector to make a House Based on HouseWithGardenBuilder', () => {
		const gardenBuilder = new HouseWithGardenBuilder(new House());

		const director = new HouseDirector(gardenBuilder);

		director.make();

		const makedHouse = director.getHouse();

		expect(makedHouse).toBeInstanceOf(House);
		expect(makedHouse.toString()).toBe(`House${'\n'}pool: false${'\n'}garden: true${'\n'}floors: 1`);
	});

	test('It should use a HouseDirector to make a House Based on HouseTwoFloorsWithPool', () => {
		const twoFloorsPoolBuilder = new HouseTwoFloorsWithPool(new House());

		const director = new HouseDirector(twoFloorsPoolBuilder);

		director.make();

		const makedHouse = director.getHouse();

		expect(makedHouse).toBeInstanceOf(House);
		expect(makedHouse.toString()).toBe(`House${'\n'}pool: true${'\n'}garden: false${'\n'}floors: 2`);
	});
});
