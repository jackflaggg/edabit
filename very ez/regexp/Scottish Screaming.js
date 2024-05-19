// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
//
// 	Create a function that takes a string and returns a string.
//
// 	Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
//
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
//
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"
// Notes
// Make sure to include all punctuation that is in the original string.
// 	You don't need any more namespaces than are already given.

function toScottishScreaming(str) {
	return str.replace( /[a-zA-Z0-9]?a|u|i|o.*/gi, `e`).toUpperCase()
}

console.log(toScottishScreaming('Butterflies are beautiful!'))