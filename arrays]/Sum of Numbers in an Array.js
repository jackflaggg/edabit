function arraySum(nums) {
    return nums.map(elem => elem % 2 === 0 ? Math.pow(elem,2) :  Math.sqrt(elem)).reduce((acc, curr) => acc + curr, 0);
}
console.log(arraySum([1,2,3,4,5,6,7]))