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


for (var key in letterScores) {
    if (letterScores.hasOwnPropety(key)) {
        console.log(key + "->" + p[key])
    }
}
