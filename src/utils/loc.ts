const removeLeadingOrTrailingSlash = (path: string) =>
    path.replace(/^\/|\/$/g, '');

export function arePathsEqual(p1: string, p2: string): boolean {
    return (
        removeLeadingOrTrailingSlash(p1) === removeLeadingOrTrailingSlash(p2)
    );
}

export function arePathsSimilar(p1: string, p2: string): boolean {
    return (
        removeLeadingOrTrailingSlash(p1).startsWith(
            removeLeadingOrTrailingSlash(p2)
        ) ||
        removeLeadingOrTrailingSlash(p2).startsWith(
            removeLeadingOrTrailingSlash(p1)
        )
    );
}

export function getLastPathSegment(path: string): string | undefined {
    return path
        .split('/')
        .filter((i) => i != '')
        .pop();
}
