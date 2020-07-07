class Person {
  constructor(name, lastName, country) {
    this.name = name
    this.lastName = lastName
    this.country = country
  }

  toString() {
    return `${this.name} ${this.lastName} lives in ${this.country}`
  }
}

class PersonFactory {
  static create() {
    return new Person();
  }
}

class BrazilianFactory extends PersonFactory{
  static create(name, country = 'brazil') {
    return new Person(name, 'silva', country)
  }
}

class AmericanFactory extends PersonFactory{
  static create(name, country = 'eua') {
    return new Person(name, 'smith', country)
  }
}

module.exports.BrazilianFactory = BrazilianFactory;
module.exports.AmericanFactory = AmericanFactory;