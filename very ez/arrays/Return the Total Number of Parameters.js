// Create a function that returns the total number of parameters passed in.
//
// Examples
// numberArgs("a", "b", "c") ➞ 3
//
// numberArgs(10, 20, 30, 40, 50) ➞ 5
//
// numberArgs(x, y) ➞ 2
//
// numberArgs() ➞ 0
// Notes
// How can you express the input parameter so it takes a variable number of arguments?
//     Check the Resources tab for additional info.

function numberArgs() {
    return arguments.length;
}

console.log(numberArgs('x', 2, true))