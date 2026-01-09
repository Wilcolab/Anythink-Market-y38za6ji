/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and mixed casing.
 * * @param {string} str - The input string.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
  return str
    // 1. Convert the whole string to lowercase to handle SCREEN_NAME
    .toLowerCase()
    // 2. Find separators (space, _, -) followed by a character
    .replace(/[-_\s]+(.)?/g, (match, char) => {
      // 3. Capitalize the character following the separator
      return char ? char.toUpperCase() : '';
    })
    // 4. Ensure the very first character of the result is lowercase
    .replace(/^([A-Z])/, (match) => match.toLowerCase());
}

// Testing the cases:
console.log(toCamelCase("first name"));    // "firstName"
console.log(toCamelCase("user_id"));       // "userId"
console.log(toCamelCase("SCREEN_NAME"));   // "screenName"
console.log(toCamelCase("mobile-number")); // "mobileNumber"


//trying