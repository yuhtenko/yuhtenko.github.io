/**
 * Converts a string into a camel case string without spaces.
 * @param str
 */
export function toCamelCase(str: string): string {
    // returns a string with spaces removed and each word capitalized except the first.
    return str
        .replace(/\s(.)/g, function (s) {
            return s.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (s) {
            return s.toLowerCase();
        });
}
