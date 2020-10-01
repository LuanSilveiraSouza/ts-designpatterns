class JobList {
	constructor() {
		this.subscribers = [];
		this.jobs = [];
	}

	register(jobSeeker) {
		this.subscribers.push(jobSeeker);
	}

	unregister(jobSeeker) {
		this.subscribers = this.subscribers.filter(
			(item) => !(item instanceof jobSeeker)
		);
	}

	notify() {
		return this.subscribers.map((item) => item.update(this));
	}

	addJob(jobPost) {
		this.jobs.push(jobPost);
		this.notify();
	}
}

class JobSeeker {
	constructor(name = '') {
		this.name = name;
	}

	update(jobList) {
		return `${this.name} is notified that the joblist has a new job: ${
			jobList.jobs[jobList.jobs.length - 1]
		}`;
	}
}

module.exports = { JobList, JobSeeker };
