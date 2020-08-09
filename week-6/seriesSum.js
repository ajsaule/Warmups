const seriesSum = (max) => {
    var baseNum = 1
    var denominator = 4
    var incrementor = 3
    for (let i = 0; i <= max; i++) {
        if (max = 0) {
            return 0
        } else if (max = 1) {
            baseNum += (1 / denominator)
        } else {
            baseNum += (1 / (denominator += incrementor))
        }
    }
    return baseNum
}

console.log(seriesSum(0));
console.log(seriesSum(1));
console.log(seriesSum(3));
console.log(seriesSum(5));