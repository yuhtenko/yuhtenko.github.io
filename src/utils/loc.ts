const removeLeadingOrTrailingSlash = (path: string) =>
    path.replace(/^\/|\/$/g, '');

export function arePathsEqual(p1: string, p2: string): boolean {
    return (
        removeLeadingOrTrailingSlash(p1) === removeLeadingOrTrailingSlash(p2)
    );
}
