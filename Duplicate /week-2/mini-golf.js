// # Mini Golf

// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. 
// Write a function called `totalScores` in JS that calculates their scores and `console.log` the total for each player and their combined total.

let Bob = {
    Hole_1: 3,
    Hole_2: 2,
    Hole_3: 6,
    Hole_4: 11,
    Hole_5: 9,
    Hole_6: 2,
    Hole_7: 6,
    Hole_8: 9,
    Hole_9: 10
}

let Jimbo = {
    Hole_1: 5,
    Hole_2: 12,
    Hole_3: 9,
    Hole_4: 22,
    Hole_5: 13,
    Hole_6: 7,
    Hole_7: 16,
    Hole_8: 10,
    Hole_9: 11
}

let Fish = {
    Hole_1: 2,
    Hole_2: 2,
    Hole_3: 4,
    Hole_4: 5,
    Hole_5: 4,
    Hole_6: 3,
    Hole_7: 6,
    Hole_8: 4,
    Hole_9: 1
}

function totalScores(player) {
    let totalPoints = 0;
    for (let i = 1; i <= 9; i++) {
        totalPoints += player[`Hole_${i}`];
    }
    return totalPoints
}

console.log(totalScores(Bob));

/*
Do objects only start from position 1 at their count? Not zero-based?

*/