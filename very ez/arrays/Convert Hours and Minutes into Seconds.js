// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
//
//     Examples
// convert(1, 3) ➞ 3780
//
// convert(2, 0) ➞ 7200
//
// convert(0, 0) ➞ 0
// Notes
// Don't forget to return the result.

function convert(hours, minutes) {
    return (hours * 60 + minutes) * 60;
}

console.log(convert(3, 1));