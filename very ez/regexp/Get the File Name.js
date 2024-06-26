// Create a function that returns the selected filename from a path. Include the extension in your answer.
//
// 	Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
//
// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
//
// getFilename("ffprobe.exe") ➞ "ffprobe.exe"
// Notes
// Tests will include both absolute and relative paths.
// 	For simplicity, all paths will include forward slashes.

function getFilename(path) {
	return path.split('/').map(str => str.search(/[.]/g) >= 0 ? str : '').join('').trim();
}

console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename('ffprobe.exe'))