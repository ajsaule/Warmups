// # The Board
// ​
// Write a program that creates a string that represents a grid, using new-line characters to separate lines. 
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
// Printing this string should show something like this:
// ​
// ```
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # # 
// ```

// loop # space # concatenation # 

const theBoard = (w, h) => {
    count = h
    while (count > 0) {
        console.log("# ".repeat(w))
        console.log(" #".repeat(w))
        count--
    }
}

console.log(theBoard(8, 4))