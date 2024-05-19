// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.
//
//     arr = [
//     ["m", "u", "b"],
//     ["a", "s", "h"],
//     ["i", "r", "1"]
// ]
//
// idx = [1, 3, 5, 8]
// You have to find the characters in these indexes of the given list if you think of the indexes as:
//
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// arrIndex(lst, idx) ➞ "mbsr"

function arrIndex(arr, idx) {
    return idx.map(index => arr.flat()[index - 1]).join('')
}

console.log(arrIndex([
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
], [1, 3, 5, 6, 7]))