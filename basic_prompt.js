

/**
 * Converts a string to camelCase.
 * Handles spaces, hyphens, and underscores.
 */
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// Verification:
console.log(toCamelCase("get_user_info")); // "getUserInfo"
console.log(toCamelCase("CSS-style-property")); // "cssStyleProperty"

// trying