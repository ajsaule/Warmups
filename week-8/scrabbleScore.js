var wordOne = 'cabbage'
var wordTwo = 'cat' 

var letterScores =
    {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'K'],
        10: ['Q', 'Z'],
    }

var letterScoresHash = {  } // generate new hash in here 

// can do the same solution by just re-arranging to a pure hash table 
// Use for..in loop to loop through keys and construct new object hash map of values 

for (key in letterScores) {
    letterScores[key].forEach(value => console.log(letterScores[key]) //letterScoresHash[`${key}`] = `${value.toLowerCase()}`)
}

// algorithm becomes alot more efficient when using a single hash table to lookup the value of each letter 

// we can write code to build the hash above and then go through it as a lookup 

// How to write code to construct the above into a hash map (lookup table )

// var letterScoresTwo = {}

// letterScoresTwo.push("1: 'do it'")

// console.log(letterScoresTwo)
    


// try .map.sum solution
// try accumulate as you go 