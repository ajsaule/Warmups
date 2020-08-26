// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  var maxArr = []
  for (let i = 0; i < arr.length; i++) {
    maxArr.push(Math.max(...arr[i])) // using the spread operator to destructure the array and get max. Then push in to the max array! 
  }
  return maxArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
