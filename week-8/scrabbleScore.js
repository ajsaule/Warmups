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

// letterScores.forEach((key, value) => console.log(`${key}, ${value}`))

for (key in letterScores) {
        console.log(key + ":" + letterScores[key])
}

// can do the same solution by just re-arranging to a pure hash table 
// algorithm becomes alot more efficient 
// we can write code to build the hash above and then go through it as a lookup 

var letterScoresTwo = 
    {  }


// try .map.sum solution
// try accumulate as you go 