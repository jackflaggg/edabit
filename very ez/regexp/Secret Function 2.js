// Create a function based on the input and output. Look at the examples, there is a pattern.
//
// 	Examples
// secret("div*2") ➞ "<div></div><div></div>"
//
// secret("p*1") ➞ "<p></p>"
//
// secret("li*3") ➞ "<li></li><li></li><li></li>"
// Notes
// Input is a string.

function secret(text) {
	const [tag, count] = text.split('*');
	return text.replace(text, `<${tag}></${tag}>`.repeat(count))
}

console.log(secret("John*3"));

// repeat(text[text.length - 1])