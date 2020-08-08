// using for, forEach, map, filter, sort, reduce

var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
  ];
  
  // write code to get an array of all users that have the username "Ear"
  
var filteredName = users.filter(user => user.username.includes("Ear"))
console.log(filteredName)
  // write code to get an array of all users with an age of 60 or over

var filteredArr = users.filter(user => user.age >= 60)
console.log(filteredArr)

  // write code to get an array of all ids in users

var allIds = users.map(user => user.id)
console.log(allIds)
  
  // write a function that calculate the average age of all users 
  
var avgAge = users.map(user => user.age).reduce((accum, user) => accum + user) / users[5].id

console.log(avgAge)

  // sort the users by username in ascending order
  
var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];
  
  // console log each word in words in uppercase excluding the first word

for (i = 1; i < words.length; i++) {
    console.log(words[i].toUpperCase())
}
  
words.filter(word => console.log(word))

  // write code to count the number of words with more than 5 letters 
var countTwo = 0
for (i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        countTwo++
    }   
}
console.log(countTwo)

var count = 0
var moreThanFive = words.filter(word => word.length > 5).forEach(word => count + 1)
  console.log(moreThanFive)

  // get an array of words with each word's first character capitalize (just the first character of each string)

var upCaseWords = words.map(word => word[0].toUpperCase() + word.slice(1))
console.log(upCaseWords)