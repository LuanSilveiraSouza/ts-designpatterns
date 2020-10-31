export class House {
	private pool?: boolean = false;
	private garden?: boolean = false;
	private floors?: number = 1;

	public setPool(pool: boolean): void {
		this.pool = pool;
	}
	public setGarden(garden: boolean): void {
		this.garden = garden;
	}
	public setFloors(floors: number): void {
		this.floors = floors;
	}

	public toString(): string {
		return `House${'\n'}pool: ${this.pool}${'\n'}garden: ${this.garden}${'\n'}floors: ${this.floors}`;
	}
}

export interface HouseBuilderInterface {
	getHouse(): House;
	setPool(): void;
	setGarden(): void;
	setFloors(): void;
}

export class HouseWithGardenBuilder implements HouseBuilderInterface {
	constructor(private house: House) {}

	public getHouse(): House {
		return this.house;
	}

	public setPool() {
		this.house.setPool(false);
	}

	public setGarden() {
		this.house.setGarden(true);
	}

	public setFloors() {
		this.house.setFloors(1);
	}
}

export class HouseTwoFloorsWithPool implements HouseBuilderInterface {
	constructor(private house: House) {}

	public getHouse(): House {
		return this.house;
	}

	public setPool() {
		this.house.setPool(true);
	}

	public setGarden() {
		this.house.setGarden(false);
	}

	public setFloors() {
		this.house.setFloors(2);
	}
}

export class HouseDirector {
	constructor(private builder: HouseBuilderInterface) {}

	public make() {
		this.builder.setPool();
		this.builder.setGarden();
		this.builder.setFloors();
	}

	public getHouse() {
		return this.builder.getHouse();
	}
}