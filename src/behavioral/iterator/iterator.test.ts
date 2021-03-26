import { Employee, Company } from './iterator';

describe('Iterator Test', () => {
	test('It should create a company and get the leaders', () => {
		const ceo = new Employee('John', 'CEO');
		const cto = new Employee('Wanda', 'CTO');
		const dev1 = new Employee('Carl', 'Dev');
		const cpo = new Employee('Mary', 'CPO');

        const company = new Company(ceo);
        company.push(cto, ceo.id);
        company.push(dev1, cto.id);
        company.push(cpo, ceo.id);

		expect([...company]).toHaveLength(3);
		expect([...company][2].role).toBe('CPO');
	});
});
