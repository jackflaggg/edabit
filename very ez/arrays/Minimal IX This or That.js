// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//
//     Write a function that returns the first truthy argument passed to the function. If all arguments are falsy, return the string "not found". The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.
//
//     Tips
// The logical OR operator || can be used to assign or return the first truthy value among two or more elements. If no truthy value is found, the last element will be returned.
//
//     For example, the code:
//
//     function oneOfThese(a, b, c) {
//         if (a) return a;
//         else if (b) return b;
//         else return c;
//     }
// Can be simplified to:
//
//     const oneOfThese = (a, b, c) => a || b || c;
// Bonus
// Once a truthy value is found, the rest of the elements will not be checked. This can be used to define a sort of default value that will be returned if all of the previous elements happen to be false or empty:
//
//     Notes

const firstOne = (a, b, c, d) => a || b || c || d || 'not found';

console.log(firstOne(null, 2))