const {BrazilianFactory, AmericanFactory} = require('./factory')

describe('Factory Test', () => {
  test('It should create 2 persons and validate the toString method', () => {
    const personA = BrazilianFactory.create('luan')
    expect(personA.toString()).toBe('luan silva lives in brazil')
    expect(personA.lastName).toBe('silva')

    const personB = AmericanFactory.create('john')
    expect(personB.toString()).toBe('john smith lives in eua')
    expect(personB.lastName).toBe('smith')
  })
})
