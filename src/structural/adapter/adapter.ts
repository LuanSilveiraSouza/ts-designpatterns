interface Equipment110V {
	turn110On(): string;
}

export class Toaster implements Equipment110V {
	turn110On() {
		return 'Toaster 110V ON';
	}
}

export class Blender implements Equipment110V {
	turn110On() {
		return 'Blender 110V ON';
	}
}

export class SocketStrip {
	public plugs: Equipment110V[];

	constructor() {
		this.plugs = [];
	}

	attach(equip: Equipment110V) {
		this.plugs.push(equip);
		return equip.turn110On();
	}
}

export class AirFryer {
	turn220On() {
		return 'AirFryer 220V ON';
	}

	turn220Off() {
		return 'AirFryer 220V OFF';
	}
}

export class AirFryerAdapter implements Equipment110V {
	airFryer: AirFryer;

	constructor(airFryer: AirFryer) {
		this.airFryer = airFryer;
	}

	turn110On() {
		return this.airFryer.turn220On();
	}
}
