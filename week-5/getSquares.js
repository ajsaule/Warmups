var numArrayOne = [1, 4, 3, 6, 16, 5, 24]
var newArr = []

const getSquares = (numArr) => {
    numArrayOne.forEach(checkSquare)
    newArr.sort
    return newArr
}

const checkSquare = (n) => {
    var sqrt = Math.sqrt(n)
    if (/\.0/.test(sqrt)) {  // don't do regex on floating points
        newArr.push(n)
    }
}

console.log(getSquares(numArrayOne))

