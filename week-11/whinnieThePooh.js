// var jarObj = {} //new Array(100)
// var numOfJars = 100

// // construct the object with loop setting all to closed
// for (let i = 0; i <= numOfJars; i++) {
//     jarObj[i] = "closed"
// }

function openJarsOfHoney(numOfJars, visits) {
    var jarObj = {} //new Array(100)
    // construct the object with loop setting all to closed
    for (let i = 0; i <= numOfJars; i++) {
        jarObj[i] = "closed"
    }
    // loop through with for in loop to set new state of jars, 1st % 2, 2nd % 3 with branching
    for (let i = 0; i <= visits; i++) {
        for (let key in jarObj) {
            if (Number(key) % i === 0 && jarObj[key] === "open") {
                jarObj[key] = "closed"
            } else if (Number(key) % i === 0 && jarObj[key] === "closed") {
                jarObj[key] = "open"
            } 
        }
    }
    // store the open jar number into array and return 
    let openJars = []
    for (let key in jarObj) {
        if (jarObj[key] === "open") {
            openJars.push(key)
        }
    } 
    // returning openJars
    return openJars
}

console.log(openJarsOfHoney(100, 100y ))


// solution, there should only be 10 jars open at the end of the loops...