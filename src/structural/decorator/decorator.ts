interface Hamburguer {
	getCost(): number;
	getIngredients(): string;
}

export class SimpleHamburguer implements Hamburguer {
	getCost() {
		return 5;
	}

	getIngredients() {
		return 'Beef';
	}
}

export class CheeseHamburguer implements Hamburguer {
	hamburguer: Hamburguer;
	
	constructor(hamburguer: Hamburguer) {
		this.hamburguer = hamburguer;
	}

	getCost() {
		return this.hamburguer.getCost() + 3;
	}

	getIngredients() {
		return `${this.hamburguer.getIngredients()}, Cheese`;
	}
}

export class BaconHamburguer implements Hamburguer {
	hamburguer: Hamburguer;
	
	constructor(hamburguer: Hamburguer) {
		this.hamburguer = hamburguer;
	}

	getCost() {
		return this.hamburguer.getCost() + 4;
	}

	getIngredients() {
		return `${this.hamburguer.getIngredients()}, Bacon`;
	}
}