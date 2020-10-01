const { JobList, JobSeeker } = require('./observer');

describe('Observer Test', () => {
	test('It should create a observer, subscribe itens and notify them when a job is posted', () => {
		const joblist = new JobList();

		const person1 = new JobSeeker('John');
		const person2 = new JobSeeker('Mary');

		joblist.register(person1);
		joblist.register(person2);

		expect(joblist.subscribers).toEqual(
			expect.arrayContaining([person1, person2])
		);

		joblist.addJob('Software Developer');

		expect(joblist.notify()).toEqual(
			['John is notified that the joblist has a new job: Software Developer',
			'Mary is notified that the joblist has a new job: Software Developer']
		);
	});
});
