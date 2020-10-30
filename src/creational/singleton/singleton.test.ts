import { getMyComputerInstance } from './singleton';

describe('Singleton Test', () => {
	test('It should make 2 copies from singleton instance and compare both', () => {
		const oneYearComputer = getMyComputerInstance();
		const twoYearComputer = getMyComputerInstance();

		expect(oneYearComputer.getModel()).toBe('Lenovo Ideapad');
		expect(twoYearComputer.getProcessor()).toBe('I7');
		expect(oneYearComputer).toEqual(twoYearComputer);
	});
});
