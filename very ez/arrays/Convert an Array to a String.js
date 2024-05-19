// Create a function that takes an array of numbers or letters and returns a string.
//
//     Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// Notes

function solve(arr) {
    return String(arr.join(''));
}

console.log(solve(["a", "b", "c", "d", "e", "f"]));