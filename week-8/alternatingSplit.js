// function encrypt(message, n) {
//     var messageArr = message.split("")
//     var everySecondArr = []
    
//     var numOfRepeats = 0
//     while (numOfRepeats < n) {
//         for (i = 0; i < messageArr.length; i += 2) {
//             everySecondArr.push(messageArr[i])
//         }
//         numOfRepeats++
//     }
//     return everySecondArr
//     return messageArr
// }


function encrypt(message, n) {
    var messageArr = message.split("")
    var repeats = 0

    while (n > 0) {
        var filteredArrOne = []
        var filteredArrTwo = []

        messageArr.filter((letter, indx) => filteredArrOne.push(indx % 2 === 0))
        // messageArr.filter()
        // var filteredArrTwo = messageArr.filter((letter, indx) => indx !% 2)
        // not sure how to get the remaining items that are leftover from the .filter? 
        n--
    } 
    return filteredArrOne
}


console.log(encrypt("This is a test", 1))