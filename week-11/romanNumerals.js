var now = require('performance-now')

// Write a function to convert from normal numbers to Roman Numerals: e.g.

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
// I => 1
// IV => 4
// V => 5
// IX => 9
// X => 10 
// XC => 90
// L => 50 
// C => 100
// CD => 400
// D => 500
// CM => 900
// M => 1000 


function numToRomanNumeralv1(num) {
    
    var result = ""
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XC', 'X', 'IX', 'V', 'IV', 'I']
    var integer = [1000, 900, 500, 400, 100, 50, 90, 10, 9, 5, 4, 1]
    
    for (let i = 0; i < roman.length; i++) {
        while (num >= integer[i]) {
            result += roman[i];
            num -= integer[i];
        }
    }
    return result;
}

var tt0 = now()

console.log(numToRomanNumeralv1(1000))

var tt1 = now()

console.log(tt1-tt0)


function numToRomanNumeralv2(num) {
    var result = ""
    var lookupObj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    
    for (let key in lookupObj) {
        while (num >= lookupObj[key]) {
            result += key;
            num -= lookupObj[key];
        }
    }
    return result;
}

// need to run the program over a larger scale so can get a more definitive result
var tOverall = 0

for (var i = 0; i <= 10000; i++) {
    var t0 = now()

    numToRomanNumeralv2(10)

    var t1 = now()

    tOverall += t1-t0
}

console.log( tOverall/ 10000 )