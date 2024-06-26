// Write a function that removes any non-letters from a string, returning a well-known film title.
//
// 	Examples
// lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"
//
// lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"
//
// lettersOnly("^U)6$22>8p).") ➞ "Up"

function lettersOnly(str) {
	return str.match(/[a-zA-Z]+?/g).join('')
}

console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"))