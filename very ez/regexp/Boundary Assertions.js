// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
//
// Examples
// accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
//
// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
//
// 	accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]

function acceptedWords(arr) {
	return arr.map(elem => elem.search(/C/g) >= 0 ? '' : elem).filter(Boolean);
}

console.log(acceptedWords(["Ducks", "Bears",  "Cats"]));