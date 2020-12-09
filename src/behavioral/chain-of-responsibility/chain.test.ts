import { L1, L2, L3 } from './chain';

describe('Chain of Responsibility Test', () => {
	test('It should create a chain of cache levels and pass data to they store', () => {
		const l3 = new L3();
		const l2 = new L2();
        const l1 = new L1();
        
        l3.setNext(l2);
        l2.setNext(l1);

        expect(l3.memory).toBe(32);
        expect(l2.memory).toBe(256);
        expect(l1.memory).toBe(2048);

        expect(l3.store(30)).toBe('Storing data in Cache L3');
        expect(l3.store(100)).toBe('Storing data in Cache L2');
        expect(l3.store(1024)).toBe('Storing data in Cache L1');
        expect(l3.store(4096)).toBe('Chain ended');
	});
});
