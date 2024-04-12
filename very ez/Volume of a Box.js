// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//
//     Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
//     Volume is length * width * height.

function volumeOfBox(sizes) {
    return Object.values(sizes).reduce((acc, elem) => acc * elem, 1)
}

console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))