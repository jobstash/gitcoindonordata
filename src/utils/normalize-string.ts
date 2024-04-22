export const normalizeString = (input: string): string =>
  input
    .trim() // Remove whitespace
    .replace(/\s+/g, '-') // Replace space w/ dash
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric chars
    .toLowerCase();
