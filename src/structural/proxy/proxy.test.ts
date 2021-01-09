import { MongoDb, DatabaseAuth } from './proxy';

describe('Proxy Tests', () => {
	test('It should barrier the database connection by a wrong password entry', () => {
        const database = new DatabaseAuth(new MongoDb());

        expect(database.connect('')).toBe('Unauthorized');
	});
    test('It should allow the database access by a correct password entry', () => {
        const database = new DatabaseAuth(new MongoDb());

        expect(database.connect('S3CR37')).toBe('Connected to MongoDb Database');
        expect(database.disconnect()).toBe('Closing connection');
	});
});