export class Calculator {
	private value: number;

	constructor() {
		this.value = 0;
	}

	sum(x: number) {
		this.value += x;
	}

	minus(x: number) {
		this.value -= x;
	}

	getValue() {
		return this.value;
	}

	save(): CalculatorMemento {
		return new CalculatorMemento(this.value);
	}

	restore(memento: CalculatorMemento) {
		this.value = memento.getValue();
	}
}

export class CalculatorMemento {
	private value: number;

	constructor(value: number) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}
}
