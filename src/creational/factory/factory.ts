export class Person {
	name: string;
	lastName: string;
	country: string;

	constructor(name: string, lastName: string, country: string) {
		this.name = name;
		this.lastName = lastName;
		this.country = country;
	}

	toString() {
		return `${this.name} ${this.lastName} lives in ${this.country}`;
	}
}

interface PersonFactory {
	create: (name: string, country: string) => Person;
}

export class BrazilianFactory implements PersonFactory {
	create(name = '', country = 'brazil') {
		return new Person(name, 'silva', country);
	}
}

export class AmericanFactory implements PersonFactory {
	create(name = '', country = 'eua') {
		return new Person(name, 'smith', country);
	}
}
