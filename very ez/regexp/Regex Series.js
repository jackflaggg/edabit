// Write a regular expression that matches a string if it contains at least one digit.
//
// 	Examples
// "c8" ➞ true
//
// "23cc4" ➞ true
//
// "abwekz" ➞ false
//
// "sdfkxi" ➞ false
// Notes
// This challenge is designed to use RegEx only.

let x = /[0-9]+/g

let str = 'abwekz'
console.log(x.test(str))