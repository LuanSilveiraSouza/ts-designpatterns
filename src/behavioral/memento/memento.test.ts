import { Calculator, CalculatorMemento } from './memento';

describe('Memento Test', () => {
	test('Should create a calculator then use the memento to bring back a value after a calculator', () => {
		const calc = new Calculator();
		const calcSpy = jest.spyOn(calc, 'getValue');

		expect(calc.getValue()).toBe(0);

		calc.sum(6);

		const memento = calc.save();

		calc.minus(4);

		expect(calc.getValue()).toBe(2);
		calc.restore(memento);
		expect(calc.getValue()).toBe(6);
		expect(calcSpy).toHaveBeenCalledTimes(3);
	});
});
