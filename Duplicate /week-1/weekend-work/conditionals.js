// # Conditionals
// ​
// ### Air Conditioning
// - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
//     - If the airconditioner is functional and the current temperature is above the the desired temperature... 
// 				display "Turn on the A/C Please"
//     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... 
//				display "Fix the A/C now!  It's hot!"
//     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... 
// 				display "Fix the A/C whenever you have the chance...  It's cool..."

// !! This program was missing a condition where the current temperature is below the desired temperature

let currentTemp = parseInt(prompt('What is the current temperature', 'enter a celsius temperature'));
let desiredTemp = parseInt(prompt('What do you wish the temperature to be', 'enter a celsius temperature'));
let acFunctioning = true;

if (acFunctioning && currentTemp > desiredTemp) {
	alert("Turn on the A/C please");
} else if (acFunctioning && currentTemp < desiredTemp) {
	alert("Tun off the A/C please");
} else if (!acFunctioning && currentTemp > desiredTemp) {
	alert("Fix the A/C now! It's hot");
} else if (!acFunctioning && currentTemp < desiredTemp) {
	alert("Fix the A/C whenever you have a chance... It's cool...");
} else {
	alert('Please input a number');
}



//### Melbourne Suburbs
// - Create a program that asks what suburbs you live in.
// - Depending on the answer, print an appropriate response of your choosing

let userSuburb = prompt('What suburb do you live in?');
userSuburb = userSuburb.toLowerCase();

if (userSuburb === 'carnegie' || userSuburb === 'brighton' || userSuburb === 'malvern') {
	document.write('You are from the Southeast');
} else if (userSuburb === 'carlton' || userSuburb === 'docklands' || userSuburb === 'southbank') {
	document.write('You are from the City of Melbourne');
} else if (userSuburb === 'ivanhoe' || userSuburb === 'rosanna' || userSuburb === 'northcote') {
	document.write('You are from the North side');
} else {
	document.write('You live in Melbourne.');
} 