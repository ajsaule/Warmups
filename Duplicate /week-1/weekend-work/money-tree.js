// Make the console ouput the following:
//          $
//         $$$
//        $$$$$
//       $$$$$$$
//      $$$$$$$$$
//     $$$$$$$$$$$
//    $$$$$$$$$$$$$
//   $$$$$$$$$$$$$$$


// first attempt using .repeat and .slice within a function 

function createMoneyTree(lines) {
    var moneyPrint = '$';
    var spacer = '  '.repeat(lines - 1);

    while (lines >= 0) {
        console.log(spacer + moneyPrint);
        moneyPrint += '$$';
        spacer = spacer.slice(1);
        lines--;
    }

}

createMoneyTree(parseInt(prompt('How many branches do you want your tree to have?')));

// ----------------------------------------- //

// second attempt with a for loop

// function createTree(lines) {
//     var spacers = '                      ';
//     var moneys = '$';
//     for (let i = lines; i >= 0; i--) {
//         console.log(spacers + moneys);
//         moneys = moneys + '$$';
//     }
// }

// createTree(15);

// ----------------------------------------- //

// phillipe solution 

// function moneyTree(size) {
//     for (let i = 1; i <= size; i++) {
//         let space = ' '.repeat(size - i);
//         let dollarSign = '$'.repeat(i * 2 - 1)
//         console.log(space + dollarSign + space);
//     }
// }
// moneyTree(70);
