// for loop way to reverse the string 

// function checkForPalindromes(word) {
// 	let originalWord = word;
// 	let reversedWord = "";
// 	// string reversal
// 	originalWord = originalWord.replace(/[^a-zA-Z]/g, "").toLowerCase(); // redundant
// 	for (let i = originalWord.length - 1; i >= 0; i--) {
// 		reversedWord += originalWord[i];
// 	}
// 	return originalWord === reversedWord;
// }

// console.log(checkForPalindromes('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'));

// methods chained on to each other 

function checkForPalindromes(word) {
	let originalWord = word;
	let reversedWord = "";
	// string reversal
	originalWord = originalWord.replace(/[^a-zA-Z]/g, "").toLowerCase();
	reversedWord = originalWord.split("").reverse().join(""); // redundant 
	return originalWord === reversedWord;
}

console.log(checkForPalindromes('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'));