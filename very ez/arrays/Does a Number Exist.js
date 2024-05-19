// Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
//
//     Examples
// validStrNumber("3.2") ➞ true
//
// validStrNumber("324") ➞ true
//
// validStrNumber("54..4") ➞ false
//
// validStrNumber("number") ➞ false
// Notes
// Accept numbers such as .5 and 0003.

function validStrNumber(n) {
    return !Number.isNaN(n);
}

console.log(validStrNumber('.5'));