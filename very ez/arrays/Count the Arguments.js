// Create a function that returns the number of arguments it was called with.
//
// Examples
// numArgs() ➞ 0
//
// numArgs("foo") ➞ 1
//
// numArgs("foo", "bar") ➞ 2
//
// numArgs(true, false) ➞ 2
//
// numArgs({}) ➞ 1

function numArgs() {
    return arguments.length
}

console.log(numArgs('tm', 2))