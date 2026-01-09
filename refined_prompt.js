
/**
 * @fileoverview String case conversion utility functions
 * @module StringCaseConverter
 * @description Provides functions to convert strings between different naming conventions
 * with strict validation and null/undefined handling.
 */

/**
 * Converts a string to camelCase format with strict validation.
 * 
 * Handles multiple input formats including:
 * - Space-separated words: "first name" → "firstName"
 * - Snake_case: "user_id" → "userId"
 * - SCREAMING_SNAKE_CASE: "SCREEN_NAME" → "screenName"
 * - Kebab-case: "mobile-number" → "mobileNumber"
 * - PascalCase: "Single" → "single"
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert. Can contain spaces, hyphens, or underscores as separators.
 * @returns {string|null|undefined} The converted camelCase string, or the original value if input is null/undefined.
 * @throws {Error} Throws an error if the input string ends with an underscore.
 * 
 * @example
 * // Space-separated
 * toCamelCase("first name"); // "firstName"
 * 
 * @example
 * // Snake_case
 * toCamelCase("user_id"); // "userId"
 * 
 * @example
 * // SCREAMING_SNAKE_CASE
 * toCamelCase("SCREEN_NAME"); // "screenName"
 * 
 * @example
 * // Kebab-case
 * toCamelCase("mobile-number"); // "mobileNumber"
 * 
 * @example
 * // Single word
 * toCamelCase("Single"); // "single"
 * 
 * @example
 * // Null/Undefined handling
 * toCamelCase(null); // null
 * 
 * @example
 * // Error case
 * try {
 *   toCamelCase("invalid_end_");
 * } catch (e) {
 *   console.error(e.message); // "Invalid input: Strings ending with an underscore are not allowed."
 * }
 */

/**
 * Converts a string to dot.case format with strict validation.
 * 
 * Transforms various naming conventions into dot-separated lowercase format:
 * - Space-separated: "first name" → "first.name"
 * - Snake_case: "user_id" → "user.id"
 * - SCREAMING_SNAKE_CASE: "SCREEN_NAME" → "screen.name"
 * - Kebab-case: "convert-to-dot" → "convert.to.dot"
 * - camelCase/PascalCase: Inserts dots before capital letters
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert. Can contain spaces, hyphens, underscores, or camelCase formatting.
 * @returns {string|null|undefined} The converted dot.case string, or the original value if input is null/undefined.
 * @throws {Error} Throws an error if the input string ends with a period (dot).
 * 
 * @example
 * // Space-separated
 * toDotCase("first name"); // "first.name"
 * 
 * @example
 * // Snake_case
 * toDotCase("user_id"); // "user.id"
 * 
 * @example
 * // SCREAMING_SNAKE_CASE
 * toDotCase("SCREEN_NAME"); // "screen.name"
 * 
 * @example
 * // Kebab-case
 * toDotCase("convert-to-dot"); // "convert.to.dot"
 * 
 * @example
 * // Error case
 * try {
 *   toDotCase("invalid.end.");
 * } catch (e) {
 *   console.error(e.message); // "Invalid input: Strings ending with a dot are not allowed."
 * }
 */
/**
 * Converts a string to camelCase with strict validation.
 * @param {string} str - The input string.
 * @throws {Error} If the string ends with an underscore.
 * @returns {string|null} The camelCased string or null/undefined if input is null/undefined.
 */
function toCamelCase(str) {
  // 1. Handle null or undefined values
  if (str === null || str === undefined) {
    return str;
  }

  // 2. Handle edge case: check if string ends with an underscore
  if (str.endsWith('_')) {
    throw new Error("Invalid input: Strings ending with an underscore are not allowed.");
  }

  return str
    // 3. Convert to lowercase to handle SCREEN_NAME
    .toLowerCase()
    // 4. Handle separators followed by a character
    .replace(/[-_\s]+(.)?/g, (match, char) => {
      return char ? char.toUpperCase() : '';
    })
    // 5. Ensure first character is lowercase (handles PascalCase inputs)
    .replace(/^([A-Z])/, (match) => match.toLowerCase());
}

// Testing the cases:
console.log(toCamelCase("first name"));      // "firstName"
console.log(toCamelCase("user_id"));         // "userId"
console.log(toCamelCase("SCREEN_NAME"));     // "screenName"
console.log(toCamelCase("mobile-number"));   // "mobileNumber"
console.log(toCamelCase("Single"));          // "single" (One word entry)
console.log(toCamelCase(null));              // null

// This will throw an error:
try {
  toCamelCase("invalid_end_");
} catch (e) {
  console.error(e.message); // "Invalid input: Strings ending with an underscore are not allowed."
}

/**
 * Converts a string to dot.case format.
 * @param {string} str - The input string.
 * @throws {Error} If the string ends with a period.
 * @returns {string|null} The dot.case string or null/undefined if input is null/undefined.
 */
function toDotCase(str) {
  // 1. Handle null or undefined values
  if (str === null || str === undefined) {
    return str;
  }

  // 2. Handle edge case: check if string ends with a dot
  // (Following the logic from your underscore requirement)
  if (str.endsWith('.')) {
    throw new Error("Invalid input: Strings ending with a dot are not allowed.");
  }

  return str
    // 3. Handle camelCase/PascalCase by inserting a dot before capitals
    .replace(/([a-z])([A-Z])/g, '$1.$2')
    // 4. Replace spaces, hyphens, and underscores with dots
    .replace(/[\s\-_]+/g, '.')
    // 5. Convert entire string to lowercase
    .toLowerCase()
    // 6. Clean up multiple dots
    .replace(/\.+/g, '.')
    // 7. Trim leading dots
    .replace(/^\.+/, '');
}

// Examples:
console.log(toDotCase("first name"));      // "first.name"
console.log(toDotCase("user_id"));         // "user.id"
console.log(toDotCase("SCREEN_NAME"));     // "screen.name"
console.log(toDotCase("convert-to-dot"));  // "convert.to.dot"

//trying