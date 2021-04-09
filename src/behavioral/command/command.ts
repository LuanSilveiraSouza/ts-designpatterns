export class CardDeck {
	cards: Array<string>;

	constructor() {
		this.cards = Array(10);
	}

	shuffle() {
		const cardType = ['hearts', 'spades', 'clubs', 'diamonds'];

		this.cards.fill(
			`${Math.floor(Math.random() * 10) + 1} of ${
				cardType[Math.floor(Math.random() * 4)]
			}`
		);
	}

	give() {
		return this.cards[Math.floor(Math.random() * 10)];
	}
}

export interface Command {
    execute(): any;
}

export class ShuffleCommand implements Command {
    cardDeck: CardDeck;

    constructor(cardDeck: CardDeck) {
        this.cardDeck = cardDeck;
    }

    execute() {
        return this.cardDeck.shuffle();
    }
}

export class GiveCommand implements Command {
    cardDeck: CardDeck;

    constructor(cardDeck: CardDeck) {
        this.cardDeck = cardDeck;
    }

    execute() {
        return this.cardDeck.give();
    }
}

export class Dealer {
    submit(command: Command) {
        command.execute();
    }
}