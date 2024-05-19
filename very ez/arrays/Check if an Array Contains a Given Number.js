// Write a function to check if an array contains a particular number.
//
//     Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
//
// check([1, 1, 2, 1, 1], 3) ➞ false
//
// check([5, 5, 5, 6], 5) ➞ true
//
// check([], 5) ➞ false
// Notes
// Don't forget to return the result.

function check(arr, el) {
    return arr.some(elem => elem === el);
}

function checktwo(arr, el) {
    return arr.includes(el);
}

console.log(check([1, 2, 3, 4, 5], 13))
console.log(checktwo([1, 2, 3, 4, 5], 1))