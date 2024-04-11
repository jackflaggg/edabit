// Given two strings, firstName and lastName, return a single string in the format "last, first".
//
//     Examples
// concatName("First", "Last") ➞ "Last, First"
//
// concatName("John", "Doe") ➞ "Doe, John"
//
// concatName("Mary", "Jane") ➞ "Jane, Mary"
// Notes
// Don't forget to return the result.

function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}