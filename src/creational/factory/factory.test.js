const {BrazilianFactory, AmericanFactory} = require('./factory')

describe('Create a person from factory', () => {
  test('It should modify the person public attributes and call the toString function', () => {
    const personA = BrazilianFactory.create('luan')
    expect(personA.toString()).toBe('luan silva lives in brazil')
    expect(personA.lastName).toBe('silva')

    const personB = AmericanFactory.create('john')
    expect(personB.toString()).toBe('john smith lives in eua')
    expect(personB.lastName).toBe('smith')
  })
})
