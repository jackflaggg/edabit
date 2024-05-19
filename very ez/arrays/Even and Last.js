function evenLast(arr) {
    return arr.filter((elem, index) => {
        if (index % 2 === 0) {
            return elem
        }
    }).reduce((acc, item) => (item)*arr.at(-1) + acc, 0);
}

console.log(evenLast([2, 3, 4, 5]))