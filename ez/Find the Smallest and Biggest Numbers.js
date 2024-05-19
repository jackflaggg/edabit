// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//
//     Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//
// minMax([2334454, 5]) ➞ [5, 2334454]
//
// minMax([1]) ➞ [1, 1]

function minMax(arr) {
    let maxArr = arr[0];
    let minArr = arr[1];
    let newArr = []
    console.log(arr.map(elem => elem > maxArr ? maxArr = elem : minArr = elem));
    return newArr
}

console.log(minMax([1, 2, 3, 4, 5]))