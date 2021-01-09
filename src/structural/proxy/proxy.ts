export interface Database {
	connect(): string;
	disconnect(): string;
}

export class MongoDb implements Database {
	connect() {
		return 'Connected to MongoDb Database';
	}

	disconnect() {
		return 'Closing connection';
	}
}

export class DatabaseAuth {
	database: Database;

	constructor(database: Database) {
		this.database = database;
	}

	connect(password: string) {
		if (this.authenticate(password)) {
			return this.database.connect();
		}
		return 'Unauthorized';
	}

	disconnect() {
		return this.database.disconnect();
	}

	authenticate(password: string) {
		return password === 'S3CR37';
	}
}
