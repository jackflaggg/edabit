// Create a function that evaluates an equation.
//
//     Examples
// eq("1+2") ➞ 3
//
// eq("6/(9-7)") ➞ 3
//
// eq("3+2-4") ➞ 1
// Notes
// Don't print, return a value.
// Return the value, not the equation.

function eq(evaluate) {
    return eval(evaluate)
}

console.log(eq('1+123'))