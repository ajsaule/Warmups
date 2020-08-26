// Intersection
// Please complete this warmup in JavaScript without the use of any libraries.
// You are given three arrays, write a function threeWayIntersection which only returns the common elements in all three arrays. For example:



function threeWayIntersection(arr1, arr2, arr3) {
    var commonElms = []
    var tempArr = []
    arr1.forEach(elm1 => {
        arr2.forEach(elm2 => {
            if (elm1 === elm2) {
                tempArr.push(elm1)
            }
        })
    })
    arr3.forEach(elm3 => {
        tempArr.forEach(temp => {
            if (elm3 === temp) {
                commonElms.push(temp)
            }
        })
    })
    return commonElms
}

function threeWayIntersection(arr1, arr2, arr3) {

}


console.log(threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9])) // => [3,4]