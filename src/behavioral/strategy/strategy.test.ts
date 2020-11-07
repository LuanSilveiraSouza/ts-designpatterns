import { CPUProcess, GPUProcess, DiskProcess, Computer } from './strategy';

describe('Strategy Test', () => {
	test('It should execute a cpu process, validate the results, switch to disk process and do the same', () => {
		const cpu = new CPUProcess();
		const computer = new Computer(cpu);

		expect(computer.process).toBeInstanceOf(CPUProcess);

		expect(computer.consumption).toBe(120);
		expect(computer.temperature).toBe(40);

		computer.executeProcess();

		expect(computer.consumption).toBe(135);
		expect(computer.temperature).toBe(45);

		computer.setProcess(new DiskProcess)

		expect(computer.process).toBeInstanceOf(DiskProcess);

		computer.executeProcess();

		expect(computer.consumption).toBe(140);
		expect(Math.floor(computer.temperature)).toBe(46);
	});
});
