var headsCount = 0
var tailsCount = 0

function coinFlip() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
        headsCount++
        return "Heads"
    } else {
        tailsCount++
        return "Tails"
    }
}

while (headsCount < 5 || tailsCount < 5) {
    coinFlip()
    // if ("Heads") {
    //     headsCount++
    // } else {
    //     tailsCount++
    // }
}           