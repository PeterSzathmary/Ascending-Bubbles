/**
 * Get random integer between {min} and {max}, both including.
 * @param {number} min The minimum integer of the range.
 * @param {number} max The maximum integer of the range.
 * @returns {number} Returns the random integer number.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get random float between {min} and {max}, both including.
 * @param {number} min The minimum float of the range.
 * @param {number} max The maximum float of the range.
 * @returns {number} Returns the random float number.
 */
function getRandomFloat(min, max) {
    return Math.random() * (max - min + 1) + min;
}
