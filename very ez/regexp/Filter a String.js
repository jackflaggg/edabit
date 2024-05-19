// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.
//
// 	Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.
//
// 	Examples
// filterString("*$(#Mu12bas43hiR%@*!") ➞ [2, 6, 4, 8]
// // 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters
//
// filterString("^^Edabit^^%$#12379") ➞ [1, 5, 5, 7]
//
// filterString("**Airforce1**") ➞ [1, 7, 1, 4]

function countCharacters(str) {
	return[...str].reduce((acc, char) => {
		if(/[A-Z]/.test(char)) acc[0]++;
		else if(/[a-z]/.test(char)) acc[1]++;
		else if(/\d/.test(char)) acc[2]++;
		else acc[3]++;
		return acc;
	}, [0, 0, 0, 0]);


}

// Пример использования
console.log(countCharacters("*$(#Mu12bas43hiR%@*!"));  // Вывод: [2, 6, 4, 8]
console.log(countCharacters("^^Edabit^^%$#12379"));    // Вывод: [1, 5, 5, 7]
console.log(countCharacters("**Airforce1**"));         // Вывод: [1, 7, 1, 4]