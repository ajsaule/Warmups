var examResults = {
    Greg: {
        Biology: [90, 75, 23, 60],
        Maths: [100, 80, 30, 45]
    },
    Sarah: {
        Biology: [70, 65, 80, 95],
        Maths: [80, 77, 64, 90]
    },
    Thomas: {
        Biology: [40, 60, 75, 98],
        Maths: [36, 50, 67, 82]
    }
}

//   Write the code to find:

// How much Greg scored in their first Biology exam.
console.log(examResults.Greg.Biology[0])

// How much Sarah scored in their last Maths exam.
console.log(examResults.Sarah.Maths[examResults.Sarah.Maths.length - 1])

// The highest score Thomas achieved in Maths throughout the year.
var thomasMathsScores = examResults.Thomas.Maths
var highScoreArr = []

function highestScore(arr) {
    // push first item into test array
    highScoreArr.push(thomasMathsScores[0])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highScoreArr[0]) {
            highScoreArr.pop()
            highScoreArr.push(arr[i])
        }
    }
    return highScoreArr
}

console.log(highestScore(thomasMathsScores))

// The quarter that Greg achieved his lowest score in Biology in the year.
// The quaarter?? 
var gregBioScores = examResults.Greg.Biology
var lowestScore = []

function lowScore(arr) {
    // push first item into test array
    lowestScore.push(gregBioScores[0])       // returning error - cannot read property 'push' of undefined
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestScore[0]) {
            lowestScore.pop()
            lowestScore.push(arr[i])
        }
    }
    return lowestScore
}

console.log(lowScore(gregBioScores))


// Extension:
// The average of Sarah's scores in Maths for the whole year.
var sarahMathScores = examResults.Sarah.Maths

function averageScore(arr) {
    let totalScores = 0;
    for (let i = 0; i < arr.length; i++) {
        totalScores += arr[i];
    }
    return totalScores / arr.length;
}

console.log(averageScore(sarahMathScores));
