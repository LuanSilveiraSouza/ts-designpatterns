export class JobList {
	subscribers: JobSeeker[];
	jobs: string[];

	constructor() {
		this.subscribers = [];
		this.jobs = [];
	}

	register(jobSeeker: JobSeeker) {
		this.subscribers.push(jobSeeker);
	}

	unregister(name: string) {
		this.subscribers = this.subscribers.filter(
			(item) => !(item.name === name)
		);
	}

	notify() {
		return this.subscribers.map((item) => item.update(this));
	}

	addJob(jobPost: string) {
		this.jobs.push(jobPost);
		this.notify();
	}
}

export class JobSeeker {
	name: string;

	constructor(name = '') {
		this.name = name;
	}

	update(jobList: JobList) {
		return `${this.name} is notified that the joblist has a new job: ${
			jobList.jobs[jobList.jobs.length - 1]
		}`;
	}
}
