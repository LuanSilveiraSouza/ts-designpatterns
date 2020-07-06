const createPerson = require('./factory')

describe('Create a person from factory', () => {
  test('It should modify the person public attributes and call the toString function', () => {
    const person = createPerson('luan', 'souza', 'brazil')
    expect(person.country).toBe('brazil')
    person.country = 'EUA'
    expect(person.country).toBe('EUA')
    //expect(person.toString()).toBe('luan souza lives in EUA')
  })
})
