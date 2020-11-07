interface ProcessStrategy {
	execute(consumption: number): number;
}

export class CPUProcess implements ProcessStrategy {
	execute(consumption: number) {
		return consumption + 15;
	}
}

export class GPUProcess implements ProcessStrategy {
	execute(consumption: number) {
		return consumption + 10;
	}
}

export class DiskProcess implements ProcessStrategy {
	execute(consumption: number) {
		return consumption + 5;
	}
}

export class Computer {
	temperature: number;
	consumption: number;
	process: ProcessStrategy;

	constructor(process: ProcessStrategy) {
		this.temperature = 40;
		this.consumption = 120;
		this.process = process;
	}

	setProcess(process: ProcessStrategy) {
		this.process = process;
	}

	executeProcess() {
		this.consumption = this.process.execute(this.consumption);
		this.temperature = this.consumption / 3;
	}
}