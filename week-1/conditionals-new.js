//Q1 

let currentTemp = 24;
let desiredTemp = 30;
let airConFunctional = true; 


if (airConFunctional && currentTemp > deisredTemp) {
	return "Turn on the A/C Please";
} else if (!airConFunctional && currentTemp > deisredTemp) {
	return "Fix the A/C now! It's hot";
} else if (!airConFunctional && currentTemp < deisredTemp) {
	return "Fix the A/C whenever you have a change... It's cool...";
} else {
	return "Invalid input";
}

//Q2

let answer = prompt('What suburb do you live in?', 'answer here')

// simple response 
console.log(`${answer} is the best suburb`)

// complex response to match each userInput with an array or switch statement
const giveResponse = () => {
	answer = answer.toLowerCase();

}
