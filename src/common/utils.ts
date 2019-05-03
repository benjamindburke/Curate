/**
 * Generates a string of provided length up to 8 characters
 * @param length integer length of the returnes string. range 0-8 inclusive
 */
export function generateString(length: number): string {
  // found at https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length < 8 ? length : 8);
}