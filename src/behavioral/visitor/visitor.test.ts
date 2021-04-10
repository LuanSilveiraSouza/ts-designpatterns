import { Home, Building, JsonVisitor } from './visitor';

describe('Visitor Test', () => {
	test('It should visit elements by json visitor', () => {
		const jsonVisitor = new JsonVisitor();

        const home = new Home(35);
        const building = new Building(70, 3);

        const visitorSpy = jest.spyOn(jsonVisitor, 'visitHome');

        expect(home.accept(jsonVisitor)).toBe(`{\"type\":\"Home\",\"area\":35}`);
        expect(visitorSpy).toHaveBeenCalledTimes(1);
	});
});
