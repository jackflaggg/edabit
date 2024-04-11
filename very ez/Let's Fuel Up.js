// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
//
//     Create a function which calculates the amount of fuel it needs, given the distance.
//
//     Examples
// calculateFuel(15) ➞ 150
//
// calculateFuel(23.5) ➞ 235
//
// calculateFuel(3) ➞ 100
// Notes
// Distance will be a number greater than zero.
//     Return 100 if the calculated fuel turns out to be less than 100.

function calculateFuel(n) {
    return n*10 < 100 ? 100 : n*10;
}

console.log(calculateFuel(50));