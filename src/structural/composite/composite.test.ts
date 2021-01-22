import { TicketStage, TicketVip, TicketCabin, Show } from './composite';

describe('Composite Test', () => {
	test('It should create a composite and manipulate compatible leafs', () => {
		const show = new Show();

		expect(show.getPriceList()).toEqual([]);

		const stageTicket = new TicketStage();
		const cabinTicket = new TicketCabin();

		show.addTicket(stageTicket);
		show.addTicket(cabinTicket);

		expect(show.getPriceList()).toEqual([20, 120]);
	});
});
