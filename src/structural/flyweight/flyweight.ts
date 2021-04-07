export interface Movie {
	title: string;
	ageRating: number;

	assignTitle(title: string): void;
}

export class ActionMovie implements Movie {
	title: string;
	ageRating: number;

	constructor() {
		this.title = '';
		this.ageRating = 16;
	}

	assignTitle(title: string): void {
		this.title = title;
	}
}

export class RomanceMovie implements Movie {
	title: string;
	ageRating: number;

	constructor() {
		this.title = '';
		this.ageRating = 12;
	}

	assignTitle(title: string): void {
		this.title = title;
	}
}

export class ComedyMovie implements Movie {
	title: string;
	ageRating: number;

	constructor() {
		this.title = '';
		this.ageRating = 10;
	}

	assignTitle(title: string): void {
		this.title = title;
	}
}

export class MovieFactory {
	movies: any = {};

	getMovie(type: string): Movie | null {
		let movie: Movie | null = null;

		if (this.movies[type] != null) {
			movie = this.movies[type];
		} else {
			switch (type) {
				case 'action':
					movie = new ActionMovie();
					break;
				case 'romance':
					movie = new RomanceMovie();
					break;
				case 'comedy':
					movie = new ComedyMovie();
			}

			if (movie != null) {
				this.movies[type] = movie;
			}
		}

		return movie;
	}
}
