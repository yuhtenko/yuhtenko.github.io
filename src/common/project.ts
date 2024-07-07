import { Color } from '../components/theme';

export type ProjectShape = 'rectangle' | 'triangle' | 'half-circle';
export type ProjectColor = Color;

export class Project {
    public readonly id: string;
    public readonly title: string;
    public readonly type: string;
    public readonly description: string;
    public readonly shape: ProjectShape;
    public readonly color: ProjectColor;

    constructor(
        private readonly idx: number,
        data: Record<string, any>
    ) {
        this.id = data.id;
        this.title = data.title;
        this.type = data.type;
        this.description = data.description;
        this.shape = data.shape;
        this.color = data.color;
    }

    public get path(): string {
        return `/projects/${this.id}`;
    }

    public get number(): string {
        const num = this.idx + 1;

        return num < 10 ? `0${num}` : `${num}`;
    }
}
