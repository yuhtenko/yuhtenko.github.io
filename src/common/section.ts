export class Section {
    public readonly id: string;
    public readonly title: string;

    constructor(data: Record<string, any>) {
        this.id = data.id;
        this.title = data.title;
    }

    public get path(): string {
        return `#${this.id}`;
    }
}
