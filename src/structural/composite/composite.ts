export interface Ticket {
	type: string;
	getPrice(): number;
}

export class TicketStage implements Ticket {
	type: string;
	private readonly price: number;

	constructor() {
		this.type = 'stage';
		this.price = 20;
	}

	getPrice(): number {
		return this.price;
	}
}

export class TicketVip implements Ticket {
	type: string;
	protected readonly price: number;

	constructor() {
		this.type = 'vip';
		this.price = 80;
	}

	getPrice(): number {
		return this.price;
	}
}

export class TicketCabin extends TicketVip {
	getPrice(): number {
		return this.price * 1.5;
	}
}

export class Show {
	tickets: Ticket[];

	constructor() {
		this.tickets = [];
	}

	addTicket(newTicket: Ticket): boolean {
		const hasTicket = this.tickets.some(
			(ticket) => ticket.type === newTicket.type
		);

		if (!hasTicket) {
			this.tickets.push(newTicket);
		}

		return !hasTicket;
	}

	getPriceList(): number[] {
		const priceList = this.tickets.map((ticket) => ticket.getPrice());

		return priceList;
	}
}
