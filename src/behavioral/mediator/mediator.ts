interface Mediator {
	notify(sender: string, msg: string): void;
}

interface Message {
    sender: string;
    msg: string;
}

export class Arbiter implements Mediator {
	messages: Message[];

	constructor() {
		this.messages = [];
	}

	notify(sender: string, msg: string): void {
		this.messages.push({ sender, msg });
	}
}

export class Team {
	name: string;
	private mediator: Mediator;

	constructor(name: string, mediator: Mediator) {
		this.name = name;
		this.mediator = mediator;
	}

	request(msg: string) {
		this.mediator.notify(this.name, msg);
	}
}
