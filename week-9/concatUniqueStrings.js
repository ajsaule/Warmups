const _ = require('underscore')

// Take 2 strings s1 and s2 each only containing letters from a to z. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

// Example:
var s1 = "xyaabbbccccdefww"
var s2 = "xxxxyyyyabklmopq"
// longest(s1, s2) => "abcdefklmopqwxy"

function longest(string1, string2) {
    let newString = string1 + string2
    let stringArray = newString.split("")
    // when coding, make sure you know which datatype is returned out of functions.. this will determine what you can do next on it, in terms of further methods called on it.
    let newArray = _.uniq(stringArray).sort()
    console.log(stringArray)
    console.log(newArray)
}

longest(s1, s2)