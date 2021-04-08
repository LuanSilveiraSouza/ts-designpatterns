export abstract class SoftwareBuilder {
    templateMethod(): Array<string> {
        const status: Array<string> = [];

        status.push(this.defineStack());
        status.push(this.code());
        status.push(this.test());
        status.push(this.deploy());

        return status;
    }

    abstract defineStack(): string;
    abstract code(): string;
    abstract test(): string;
    abstract deploy(): string;
}

export class WebAppBuilder extends SoftwareBuilder {
    defineStack(): string {
        return 'HTML, CSS, Javascript, PHP';
    }

    code(): string {
        return 'Coding in VSCode';
    }

    test(): string {
        return 'Testing interface';
    }

    deploy(): string {
        return 'Uploading code to Github Pages';
    }
}

export class EmbeddedSystemBuilder extends SoftwareBuilder {
    defineStack(): string {
        return 'C, C++';
    }

    code(): string {
        return 'Coding in Vim';
    }

    test(): string {
        return 'Testing in protoboard';
    }

    deploy(): string {
        return 'Upload to protoboard';
    }
}