class Cell {
  constructor(type) {
    this.type = type
  }

  clone() {
    return new Cell(this.type)
  }
}

module.exports = Cell;