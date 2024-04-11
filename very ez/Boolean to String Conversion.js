// Create a function that takes a boolean variable flag and returns it as a string.
//
//     Examples
// boolToString(true) ➞ "true"
//
// boolToString(false) ➞ "false"
// Notes
// Don't forget to return the result.

function boolToString(flag) {
    return typeof flag === 'boolean' ? flag.toString() : false;
}

console.log(boolToString(true));