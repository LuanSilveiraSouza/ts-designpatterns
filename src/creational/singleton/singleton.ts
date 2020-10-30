class MyComputer {
	model: string;
	processor: string;

	constructor(model = '', processor = '') {
		this.model = model;
		this.processor = processor;
	}

	getModel() {
		return this.model;
	}

	getProcessor() {
		return this.processor;
	}
}

const instance = new MyComputer('Lenovo Ideapad', 'I7');
Object.freeze(instance);

export const getMyComputerInstance = () => {
	return instance;
};
