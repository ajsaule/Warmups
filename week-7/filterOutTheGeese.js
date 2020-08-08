// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
var geeseMix = ["Mallard", "Hook Bill", "African", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// "Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.


// solution 1
// function takes two params - arr1, arr2 
const gooseFilter = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let e = 0; e < arr2.length; e++) {
            if (arr1[i] === arr2[e]) {
                arr2.splice(e, 1) // this method skips elements 
                // function is not pure because of splice
            }
        }
    }
    return arr2
}
// nested loop to compare each arr1 elem against rest of arr2 elems

// solution 2
// nested for each that focuses on index item and compares them 
const geeseFilter = (arr1, arr2) => {
    arr1.forEach((e1) => arr2.forEach(e2 => {
        if (e1 === e2) {
            arr2[e2].splice(e2, 1)
        }
    }))
}

// solution 3 
// 