export class Game {
	title = '';
	platform: Platform;

	constructor(platform: Platform) {
		this.platform = platform;	
	}

	toString() {
		return `${this.title} playing on ${this.platform.title}`;
	};
}

export class Gow extends Game {
	title: string;
	
	constructor(platform: Platform) {
		super(platform);
		this.title = 'God of War';
	}
}

export class Halo extends Game {
	title: string;
	
	constructor(platform: Platform) {
		super(platform);
		this.title = 'Halo 4';
	}
}

interface Platform {
	title: string;
}

export class XboxOne implements Platform {
	title: string;

	constructor() {
		this.title = 'Xbox One';
	}
}

export class Ps4 implements Platform {
	title: string;

	constructor() {
		this.title = 'PS4';
	}
}