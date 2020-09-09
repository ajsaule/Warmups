// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    
    // first do a sort on the given array to get ascending order
    arr.sort();
    // get a range between the two given integers ** Caveat there are magic numbers in here
    let givenRange = [...Array(arr[1] - 2).keys()].map(i => i + arr[0] + 1);
    // setup some variables for the test 
    let targetNum = 0;
    let i = 1; // don't set to 0 or will always eval to true 
    // setup a loop so that you check over divisibility of each number and numbers in the range 
    while (targetNum === 0) {
        if (i % arr[0] === 0 && i % arr[1] === 0) {
            // newArr = givenRange.filter(num => {
            //     if (i % num === 0) {
            //         return num 
            //     }
            // })
            if (givenRange.every(num => i % num === 0)) {
                targetNum = i;
                break 
            } 
        }
        console.log('looping')
        i++
    }
    // console.log(givenRange)

    return targetNum;
}

console.log(smallestCommons([1, 5]))