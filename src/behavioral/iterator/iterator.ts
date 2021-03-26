export class Employee {
	id: string;
	name: string;
	role: string;

	constructor(name: string, role: string) {
		this.id = `${name.length} - ${Date.now()}`;
		this.name = name;
		this.role = role;
	}
}

export class Company {
	private employeeTree: Array<any>;

	constructor(chiefEmployee: Employee) {
		this.employeeTree = [];
		this.employeeTree.push({ ...chiefEmployee, parentId: '' });
	}

	push(employee: Employee, parentId: string = '') {
		this.employeeTree.push({ ...employee, parentId });
	}

	*[Symbol.iterator]() {
		let chief = this.employeeTree[0];
		yield chief;

		for (let i = 1; i < this.employeeTree.length; i++) {
			if (this.employeeTree[i].parentId == chief.id) {
				yield this.employeeTree[i];
            }
		}
	}
}
