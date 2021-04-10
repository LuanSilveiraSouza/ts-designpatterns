interface Visitee {
	accept(visitor: Visitor): any;
}

export class Home implements Visitee {
	area: number;

	constructor(area: number) {
		this.area = area;
	}

	accept(visitor: Visitor): any {
		return visitor.visitHome(this);
	}
}

export class Building implements Visitee {
	area: number;
	floors: number;

	constructor(area: number, floors: number) {
		this.area = area;
		this.floors = floors;
	}

	accept(visitor: Visitor): any {
		return visitor.visitBuilding(this);
	}
}

interface Visitor {
	visitHome(home: Home): any;
	visitBuilding(building: Building): any;
}

export class JsonVisitor implements Visitor {
	visitHome(home: Home): any {
		return JSON.stringify({type:'Home',area:home.area});
	}

	visitBuilding(building: Building): any {
		return JSON.stringify({type: 'Building',area: building.area,floors: building.floors});
	}
}
