var map1 = [
    ["A","A","A","A","X"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
];

function treasureFinder(map) {
    var lineCount = 1
    var rowsPassed = 0
    map.forEach(row => {
        row.forEach((location, index) => {
            if (lineCount % 5 === 0) {   
                rowsPassed++
            }
            if (location === "X") {
                console.log(`${index}, ${rowsPassed}`)
                // break // why can't we break out of forEach
            }
            lineCount++
        })
    })
}

treasureFinder(map1)