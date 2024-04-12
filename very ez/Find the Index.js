// Create a function that takes an array and a string as arguments and returns the index of the string.
//
//     Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
//
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
//
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.

function findIndex(arr, str) {
    return arr.findIndex(elem => elem === str)
}

console.log(findIndex(['blue', "Red", "blue", "Blue", "Green", 'blue'], "Red"));