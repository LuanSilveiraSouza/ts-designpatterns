import { ActionMovie, RomanceMovie, ComedyMovie, MovieFactory } from './flyweight';

describe('Flyweight Tests', () => {
	test('It should create movies by a movie factory', () => {
		const factory = new MovieFactory();

        const action1 = factory.getMovie('action');
        action1?.assignTitle('Predator');

        expect(action1).toBeInstanceOf(ActionMovie);
        expect(factory.movies['action'].ageRating).toBe(16);
        expect(factory.movies['comedy']).toBeUndefined();

        const action2 = factory.getMovie('action');
        action2?.assignTitle('Rambo');

        expect(action2).toBeInstanceOf(ActionMovie);

        const comedy1 = factory.getMovie('comedy');
        expect(factory.movies['comedy'].ageRating).toBe(10);

        const unknow = factory.getMovie('unknow');

        expect(unknow).toBeNull();
        expect(factory.movies['unknow']).toBeUndefined();
	});
});