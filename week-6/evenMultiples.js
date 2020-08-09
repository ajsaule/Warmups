var arr = [14, 5, 7, 2, 25, 10, 20, 40, -4, 3, 3, 25, 2, 6, 5]
var evenArr = []

// solution 1 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] % 5 === 0) {
//         evenArr.push(arr[i])
//     }
// }

// console.log(evenArr)


// solution 2 
// arr.forEach(elm => {
//     if (elm % 2 === 0 && elm % 5 === 0) {
//         evenArr.push(elm)
//     }
// });

// console.log(evenArr)

// solution 3 
arr.forEach(elm => elm % 2 === 0 && elm % 5 === 0 && evenArr.push(elm));

console.log(evenArr)