import { Employee } from './module';

describe('Module Test', () => {
	test('It should create employees with private attributes', () => {
		const employeeA = Employee('John', 'Software Developer', '7000')
		const employeeB = Employee('Cena', 'Project Manager', '12000')

		expect(employeeA.toString()).toBe('John: Software Developer');
		expect(employeeB.getSalary()).toBe('12000');
	});
});
