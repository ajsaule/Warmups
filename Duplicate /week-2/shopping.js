// Shopping
// You buy the following at the supermarket:

// Salmon tins
// Ice-cream
// Frozen berries
// Pasta
// Tomatoes
// Spinach
// Toilet paper
// Store the list of items in an appropriate data type.
// Write code to display the last 3 items you bought.
// Your kid asks you whether you bought any chocolate. 
//Write code to check your list of items to see if you have any chocolate, and if you do, tell them "yes, if you do all your chores". Otherwise tell them "no, it will rot your teeth".



let itemsBought = [
    'Salmon tins',
    'Ice-cream',
    'Frozen-berries',
    'Pasta',
    'Tomatoes',
    'Spinach',
    'Toilet paper'
];

console.log(`You last bought ${itemsBought[itemsBought.length - 1]}, ${itemsBought[itemsBought.length - 2]} and ${itemsBought[itemsBought.length - 3]}`)


// Making a search to see if chocolate is in the array 

function findChocolate(array) {
    // array.map(v => v.toLowerCase()); - How can we lower case it to prevent errors
    if (array.indexOf('Chocolate') > -1) {
        return 'Yes, if you do all your chores';
    } else {
        return 'No, it will rot your teeth'
    }
}

console.log(findChocolate(itemsBought));

// Making a more general function 

function itemInList(item) {
    // array.map(v => v.toLowerCase()); - How can we lower case it to prevent errors

    let isItemInList = itemsBought.includes(item)

    if (isItemInList) {
        return 'Yes, if you do all your chores';
    } else {
        return 'No, it will rot your teeth'
    }
}

let message = isItemInList('chocolate');
console.log(message);