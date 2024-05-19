// Given a string of letters, how many capital letters are there?
//
// 	Examples
// 	capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
//
// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
//
// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

function solve(str) {
	return str.match(/[A-Z]/g).length;
}

console.log(solve("fvLzpxmgXSDrobbgMVrc"))