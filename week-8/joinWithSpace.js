// Write a function joinWithSpace that accepts an array of words without using the built in join method
// joinWithSpace(['party', 'quiz', 'is', 'fun'])
// "party quiz is fun"

// -- solution 1 --
function joinWithSpace(arr, seperator = " ") { 
    var joinedSentence = ''
    for (i = 0; i < arr.length; i++) { 
        joinedSentence += arr[i] + seperator
    }
    return joinedSentence
}

// -- solution 2 --

function joinWithSpace(arr, seperator = " ") {
    var i = 0
    var joinedSentence = ''
    while (i < arr.length) {
        joinedSentence += arr[i] + seperator
        i++
    }
    return joinedSentence
}

console.log(joinWithSpace(['party', 'quiz', 'is', 'fun', '...', 'lets', 'go']))