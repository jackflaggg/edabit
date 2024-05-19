function drop(arr, val = 1) {
    return arr.slice(0, val);
}

console.log(drop([1, 2, 3, 4, 5, 6, 7], 2))