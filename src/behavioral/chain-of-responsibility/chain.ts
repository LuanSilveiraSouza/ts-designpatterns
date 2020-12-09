abstract class Cache {
     sucessor: any;
    memory: number;

    constructor() {
        this.memory = 0;
    }

    setNext (sucessor: Cache): void {
        this.sucessor = sucessor;
    }

    store (size: number): string {
        if (this.hasSpace(size)) {
            return `Storing data in Cache ${this.constructor.name}`;
        } else if (this.sucessor instanceof Cache) {
            return this.sucessor.store(size);
        } else {
            return 'Chain ended';
        }
    }

    hasSpace (size: number): boolean {
        return this.memory >= size;
    }
}

export class L3 extends Cache {
    constructor() {
        super();
        this.memory = 32;
    }
}

export class L2 extends Cache {
    constructor() {
        super();
        this.memory = 256;
    }
}

export class L1 extends Cache {
    constructor() {
        super();
        this.memory = 2048;
    }
}
