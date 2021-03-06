// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// unfinished... 

// function sumPrimes(num) {
//     for (var i = 0, accum = 0; i < num; i++) {
//         if (i % 1 === 0 && i % i === 0) { // wrong this will evaluate to true on every number! 
//             accum += i
//         }
//     }
//     return accum;
// }
  
// console.log(sumPrimes(10));
  
function sumPrimes(num) {
    let nums = Array.from({ length: num + 1 })
      .map((_, i) => i)
      .slice(2);
    for (let n in nums) {
      nums = nums
          .filter(val => val == nums[n] || val % nums[n] != 0);
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);
  }
  
console.log(sumPrimes(5));