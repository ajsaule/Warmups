// A wolf in sheep's clothing
// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.


// function warnTheSheep(arr) {
//     var sheepPos = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "wolf") {
//             for (let j = i; j < arr.length; j++) {
//                 if (arr[j] !== "wolf") {
//                     sheepPos++
//                 } else {
//                     console.log(`Oi! Sheep number ${sheepPos}! You are about to eaten by a wolf`)
//                     for (let k = j; k < arr.length; k++) {

//                     }
//                 }
//             }
//             return sheepPos
//         }
//     }
// }

function warnTheSheep(arr) {
    let sheepLength = arr.slice(arr.indexOf('wolf') + 1).length
    if (sheepLength > 0) {
        return `Oi! Sheep number ${sheepLength}! You are about to eaten by a wolf`
    } else {
        return "Pls go away and stop eating my sheep"
    }
}

console.log(warnTheSheep(["sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))














// warnTheSheep(["sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) === "Oi! Sheep number 5! You are about to be eaten by a wolf!"