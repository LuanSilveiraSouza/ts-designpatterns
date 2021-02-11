export function Employee(iName?: string, iPosition?: string, iSalary?: string) {
	let name = iName || '';
    let position = iPosition || '';
    let salary = iSalary || '';

	let toString = () => {
		return `${name}: ${position}`;
	};

	let getSalary = () => {
		return salary;
	};

	let setSalary = (newSalary: string) => {
		salary = newSalary;
	};

    return {
        name, position, toString, getSalary, setSalary
    }
}
