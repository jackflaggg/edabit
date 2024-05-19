// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.
//
// 	Examples
// asterisk("account") ➞ true
//
// asterisk("abccount") ➞ true
//
// asterisk("abbbccount") ➞ true
//
// asterisk("bbbccount") ➞ false

function asterisk(string) {
	return (/a.*c/g).test(string)
}

console.log(asterisk("account"));