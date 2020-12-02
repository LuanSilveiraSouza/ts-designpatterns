export class Computer {
	getEnergy() {
		return 'Energized';
	}

	boot() {
		return 'Booted';
	}

	loadOs() {
		return 'Operational System Loaded';
	}

	showInterface() {
		return 'Screen Interface';
	}

	readyToInput() {
		return 'Ready to get Inputs';
	}
}

export class ComputerFacade {
    computer: Computer;

    constructor(computer: Computer) {
        this.computer = computer;
    }

    turnOn() {
        return [
            this.computer.getEnergy(),
            this.computer.boot(),
            this.computer.loadOs(),
            this.computer.showInterface(),
            this.computer.readyToInput(),
            'Computer On'
        ]
    }
}
