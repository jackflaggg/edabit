// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.
//
//     Examples
// outlierNumber([2, 3, 4]) ➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.
//
// outlierNumber([1, 2, 3]) ➞ 2
//
// outlierNumber([4, 1, 3, 5, 9]) ➞ 4

function outlierNumber(arr) {
    return arr.filter(elem => elem % 2 !== 0).length;
}

console.log(outlierNumber([1,2,3,4,5,6,7]));