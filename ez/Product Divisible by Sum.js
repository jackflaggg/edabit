// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.
//
//     Examples
// divisible([3, 2, 4, 2]) ➞ false
//
// divisible([4, 2, 6]) ➞ true
// // 4 * 2 * 6 / (4 + 2 + 6)
//
// divisible([3, 5, 1]) ➞ false

function divisible(arr) {
    return arr.reduce((a, b) => a * b, 1) % arr.reduce((a, b) => a + b, 0) === 0;
}

console.log(divisible([3, 4, 5]));