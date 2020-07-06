function createPerson(name, lastName, country) {
  function toString() {
    return `${name} ${lastName} lives in ${country}`
  }

  return {
    name,
    country,
    toString,
  }
} 

module.exports = createPerson;