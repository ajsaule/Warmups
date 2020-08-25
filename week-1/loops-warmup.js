// # Loops Warmup
//
// Using the while loop
// ​
// 1. Print out all the leap years in the **last 100 years**.


let currentYear = 2020;
let testYear = currentYear -= 100;


while (testYear <= currentYear) {
    if (testYear % 4 === 0 && testYear % 100 !== 0) {
        console.log(testYear);
    }
    testYear++;
}

// 2. For numbers **between 100 and 200** print out multiples of 7.

let testRange = 100;

while (testRange <= 200) {
    if (testRange % 7 === 0) {
        console.log(`${testRange} is a multiple of 7`);
    }
    testRange++;
}