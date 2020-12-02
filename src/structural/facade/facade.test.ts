import { Computer, ComputerFacade } from './facade';

describe('Facade Tests', () => {
	test('It should create a Computer Facade and turn it on', () => {
		const computerFacade = new ComputerFacade(new Computer);

        console.log(computerFacade.turnOn());

        const expected = [
            'Energized',
            'Booted',
            'Operational System Loaded',
            'Screen Interface',
            'Ready to get Inputs',
            'Computer On'
        ]

        expect(computerFacade.turnOn()).toEqual(expect.arrayContaining(expected));
	});

});