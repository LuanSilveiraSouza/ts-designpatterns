export default class Cell {
	type: string;

	constructor(type: string) {
		this.type = type;
	}

	clone() {
		return new Cell(this.type);
	}
}
