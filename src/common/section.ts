export class Section {
    public readonly id: string;
    public readonly title: string;
    public readonly url?: string;

    constructor(data: Record<string, any>) {
        this.id = data.id;
        this.title = data.title;
        this.url = data.url;
    }

    public get path(): string {
        return this.url || `#${this.id}`;
    }
}
