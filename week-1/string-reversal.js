// console.log('bring it on');

// manutal string reversal using while loop 

function reverse(string) {
    var reversedWord = '';
    var index = string.length;

    while (index > 0) {
        index--;
        reversedWord += string[index];
    }
    return reversedWord;
}

console.log(reverse('loops'));

// advanced string reversal using arrays and methods
// const reverseString = (str) => {
//     let splitString = str.split('');
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join('');
//     return joinArray;
// }

// console.log(reverseString('string'));

// chaining three methods together and reversing the string

// I know how to do this quite easilty now :D 

const reverseStringChain = (str) => {
    return reversal = str.split('').reverse().join('');
}

// console.log(reverseStringChain('hello world'));

// Loop that counts 1 to 10

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(6));

// Calling a function within a condition through abstraction. Making a lego block 

let count = 0;

while (isEven(number)) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++;
}