// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
//
//     Examples
// greaterThanOne("1/2") ➞ false
//
// greaterThanOne("7/4") ➞ true
//
// greaterThanOne("10/10") ➞ false

function greaterThanOne(frac) {
    return Number(frac) > 1;
}