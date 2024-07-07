import { Project } from './project';
import { Section } from './section';

export class AppData {
    public readonly name: string;
    public readonly title: string;
    public readonly description: string;
    public readonly url: string;
    public readonly contactFormUrl: string;
    public readonly photoPortfolioUrl: string;
    public readonly gaTrackingId: string;
    public readonly sections: Section[];
    public readonly projects: Project[];
    public readonly languages: string[];
    public readonly interests: string[];

    private static _current: AppData | undefined;

    public static create(data: Record<string, any>): AppData {
        if (!this._current) {
            this._current = new AppData(data);
        }

        return this._current;
    }

    private constructor(data: Record<string, any>) {
        this.name = data.name;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.contactFormUrl = data.contactFormUrl;
        this.photoPortfolioUrl = data.photoPortfolioUrl;
        this.gaTrackingId = data.gaTrackingId;
        this.sections = Array.isArray(data.sections)
            ? data.sections.map(
                  (section: Record<string, any>) => new Section(section)
              )
            : [];
        this.projects = Array.isArray(data.projects)
            ? data.projects.map(
                  (project: Record<string, any>, idx) =>
                      new Project(idx, project)
              )
            : [];
        this.languages = data.languages;
        this.interests = data.interests;
    }

    public findProject(id: string): Project | undefined {
        return this.projects.find((project) => project.id === id);
    }
}
