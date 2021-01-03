import { Reverse, FirstGear, SecondGear, Car } from './state';

describe('State Test', () => {
	test('It should create a car and accelerate with different states', () => {
        const reverse = new Reverse();
        const firstGear = new FirstGear();
        const secondGear = new SecondGear();

        const car =  new Car(firstGear);

        expect(car.state).toBeInstanceOf(FirstGear);
        expect(car.accelerate()).toBe('20km/h');

        car.setState(reverse);

        expect(car.state).toBeInstanceOf(Reverse);
        expect(car.accelerate()).toBe('-20km/h');

        car.setState(secondGear);

        expect(car.state).toBeInstanceOf(SecondGear);
        expect(car.accelerate()).toBe('40km/h');
	});
});
