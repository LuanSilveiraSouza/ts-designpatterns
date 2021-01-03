export interface GearState {
	accelerate(): string;
}

export class Reverse implements GearState {
	accelerate() {
		return '-20km/h';
	}
}

export class FirstGear implements GearState {
	accelerate() {
		return '20km/h';
	}
}

export class SecondGear implements GearState {
	accelerate() {
		return '40km/h';
	}
}

export class Car {
	state: GearState;

	constructor(state: GearState) {
		this.state = state;
	}

	setState(state: GearState): void {
		this.state = state;
	}

	accelerate(): string {
		return this.state.accelerate();
	}
}
