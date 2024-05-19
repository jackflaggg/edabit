// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
//
// Examples
// countSyllables("Hehehehehehe") ➞ 6
//
// countSyllables("bobobobobobobobo") ➞ 8
//
// countSyllables("NANANA") ➞ 3
// Notes
// For simplicity, please note that each syllable will consist of two letters only.
// 	Your code should accept strings of any case (upper, lower and mixed case).

function countSyllables(str) {
	return str.toLowerCase().match(new RegExp(`\\w{${Math.floor(str.length/2)}}`, "g"))[0].length;
}

console.log(countSyllables("Hehehehehehe"));