// Create a function that returns a number, based on the string provided. Here is a list of all digits:
//
//     String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1
//
// word("two") ➞ 2
//
// word("nine") ➞ 9
// Notes
// All numbers will be single digit positive integers.

function word(s) {
    switch (s) {
        case 'one':
            s = 1;
            break
        case 'two':
            s = 2;
            break
        case 'three':
            s = 3;
            break
        case 'four':
            s = 4;
            break
        case 'five':
            s = 5;
            break
        case 'six':
            s = 6;
            break
        case 'seven':
            s = 7;
            break
        case 'eight':
            s = 8;
            break
        case 'nine':
            s = 9;
            break
        case 'zero':
            s = 0;
            break
    }
    return s;
}

console.log(word('eight'));