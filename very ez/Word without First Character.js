// Create a function that takes a word and returns the new word without including the first character.
//
//     Examples
// newWord("apple") ➞ "pple"
//
// newWord("cherry") ➞ "herry"
//
// newWord("plum") ➞ "lum"
// Notes
// The input is always a valid word.

function newWord(str) {
    return str.slice(1, str.length)
}

console.log(newWord('str'))

console.log("Hello Tproger dd dd".split(" ", 3))