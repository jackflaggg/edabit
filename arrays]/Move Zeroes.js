function moveZeros(arr) {
    let notZero = arr.filter(x => x === 0);
    return arr.filter(x => x !== 0).concat(notZero);
}

console.log(moveZeros([0, 1, null, 2, false, 1, 0]));