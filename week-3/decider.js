function coinFlip() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
        return "Heads"
    } else {
        return "Tails"
    }
}

var headsCount = 0
var tailsCount = 0

while (headsCount !== 5 || tailsCount !== 5) {
    coinFlip()
    if ("Heads") {
        headsCount++
    } else {
        tailsCount++
    }
}