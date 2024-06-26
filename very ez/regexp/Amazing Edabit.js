// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
//
// 	Examples
// amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."
//
// amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."
//
// amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing."

function amazingEdabit(str) {
	return str.search('amazing') >= 0 ? str.replace('amazing', 'not amazing') : str;
}

console.log(amazingEdabit('edabit is amazing.'));