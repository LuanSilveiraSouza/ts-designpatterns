import { Arbiter, Team } from './mediator';

describe('Mediator Test', () => {
	test('It should create a notify messages of two teams by a mediator', () => {
		const arbiter = new Arbiter();

		const team1 = new Team('Barcelona', arbiter);
		const team2 = new Team('Real Madrid', arbiter);

		team1.request('request a pause');
		team1.request('request a player switch');
        team2.request('request a yellow card to player of team 1');

		expect(arbiter.messages).toHaveLength(3);
		expect(arbiter.messages[1]).toEqual({
            sender: 'Barcelona',
            msg: 'request a player switch'
        });
	});
});
