import Cell from './prototype';

describe('Prototype test', () => {
	test('It should create a object and clones it, and both have to be the same', () => {
		const cell = new Cell('hemoglobin');
		const mitoticCell = cell.clone();

		expect(mitoticCell.type).toBe(cell.type);
		expect(mitoticCell).toBeInstanceOf(Cell);
		expect(mitoticCell).toEqual(cell);
	});
});
