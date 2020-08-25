// # useful methods for unit 1 # //
// ​---------------------------------------------- // 
// ### array methods
// ​Research the below and be able to explain them 

// - join
// Returns an array as a CSV string. You can input the seperator in the brackets e.g.(", ").
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(); // energy = "Banana, Orange, Apple, Mango";

// - concat
// Returns a new array from seperate existing arrays 
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale); // children = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];

// - indexOf
// Returns the position of the first occuring specified value in the method (referencing the very first character).
var str = ["Hello", "world", "welcome", "to", "the", "universe."];
var n = str.indexOf("welcome"); // n = 2

// - pop
// 	Returns the last value from an array, -1(end) to the array index length from the end. 
var myArray = ['the', 'things', 'I love']; // myArray = ['the', 'things', 'I love']
myArray.pop() // newArray = 'I love' (If this was to be reassigned to new var ) 

// - push
// 	Appends a value to the end of an array, adding +1(end) to the array index length. Accepts CSV's
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// - shift
// 	Returns a value from the beginnig of the array -1(start) to the array index length.
var fruits = ["Banana", "Orange", "Apple", "Mango"]; // var fruits = ["Banana", "Orange", "Apple", "Mango"]
var oneFruit = fruits.shift(); // oneFruit = 'Banana'

// - unshift
// 	Appends a value to the beginning of an array, adding +1(start) to the array index length. Accepts CSV's
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift('Dragonfruit'); // fruits = ["Dragonfruit", "Banana", "Orange", "Apple", "Mango"]

// - slice
// Returns selected elements in an array as a new array object.  Syntax - array.slice(start, end) 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruitsTwo = fruits.slice(1, 3); // fruitsTwo = ["Orange", "Apple", "Mango"]

// - reverse
// Returns a the same array but reverses the order of the elements. Changes the original.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = fruits.reverse() // fruits = ["Mango", "Apple", "Orange", "Banana"]

// - includes
// Returns true or false depending on if the data type is included in the array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango"); // n = true

// - split , syntax -- string.split()
// Splits a value into individual pieces, only works on strings. 
var string = 'hello world';
string.split()