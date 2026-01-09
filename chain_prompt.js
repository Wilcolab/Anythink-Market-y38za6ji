/**
 * Converts a string to kebab-case with specific transition handling.
 * @param {string} str - The input string.
 * @throws {Error} If the string ends with an underscore.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(str) {
  // 1. Check if input is null or undefined
  if (str === null || str === undefined) {
    return "";
  }

  // 2. Error if ends with underscore
  if (str.endsWith('_')) {
    throw new Error("Invalid input: Strings ending with an underscore are not allowed.");
  }

  // 3. Handle single word with no uppercase
  if (!/[\s\-_]/.test(str) && !/[A-Z]/.test(str)) {
    return str.toLowerCase();
  }

  let result = str
    // 4. Handle transition: lowercase/number to uppercase (myVar -> my-Var)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // 5. Handle transition: consecutive uppercase to lowercase (NASASpaceship -> NASA-Spaceship)
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    // 6. Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, '-')
    // 7. Clean up non-letter/non-number characters (ignoring * or 1 unless sequence)
    // This removes symbols but keeps letters, numbers, and the hyphens we just made
    .replace(/[^a-zA-Z0-9-]/g, '');

  // 8. Final formatting
  return result
    .toLowerCase()
    // Ensure no double hyphens
    .replace(/-+/g, '-')
    // Ensure it doesn't start or end with a hyphen
    .replace(/^-+|-+$/g, '');
}

// Examples:
console.log(toKebabCase("myVar"));           // "my-var"
console.log(toKebabCase("NASASpaceship"));    // "nasa-spaceship"
console.log(toKebabCase("first_name"));       // "first-name"
console.log(toKebabCase("simple"));           // "simple"
console.log(toKebabCase("Wait*For*It"));     // "wait-for-it"

// trying