function averageIndex(arr) {
    return (arr.map(elem =>
    {
        if (elem.toUpperCase().charCodeAt(0) >= 65 && elem.toUpperCase().charCodeAt(0) <= 90) {
            return elem.toUpperCase().charCodeAt(0) - 64;
        }
        return -1;
    }).reduce((a, b) => a + b, 0)/arr.length).toFixed(2);
}

console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]))