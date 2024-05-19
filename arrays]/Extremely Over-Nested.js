function deNest(arr) {
    return Array.isArray(arr[0]) ? deNest(arr[0]) : arr[0];
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));