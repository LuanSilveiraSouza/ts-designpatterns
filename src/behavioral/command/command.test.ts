import { CardDeck, GiveCommand, ShuffleCommand, Dealer } from './command';

describe('Command Tests', () => {
	test('It should give commands to the card deck through the card dealer', () => {
		const deck = new CardDeck();

        const giveCommand = new GiveCommand(deck);
        const shuffleCommand = new ShuffleCommand(deck);

        expect(giveCommand.cardDeck).toBe(deck);

        const dealer = new Dealer();

        const shuffleSpy = jest.spyOn(deck, 'shuffle');

        dealer.submit(shuffleCommand);

        expect(deck.cards.some(item => item == '')).toBeFalsy();
        expect(shuffleSpy).toHaveBeenCalledTimes(1);
	});
});
