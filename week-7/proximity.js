require('agile')

// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.

// You are given the following set of data as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly).

// Write a function in JS to print the names of the results in order of closest to your location to furthest away.

// Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.

var startPoint = { name: "General Assembly", location: { lat: -37.818555, long: 144.959076 } }
var results = [
    { name: "Melbourne Cricket Grounds", location: { lat: -37.819967, long: 144.983449 } },
    { name: "Flagstaff Gardens", location: { lat: -37.810680, long: 144.954352 } },
    { name: "Emporium Melbourne", location: { lat: -37.812433, long: 144.963787 } },
    { name: "City Library", location: { lat: -37.817039, long: 144.965983 } },
    { name: "Southern Cross Station", location: { lat: -37.818281, long: 144.952776 } },
    { name: "Sea Life Melbourne Aquarium", location: { lat: -37.820640, long: 144.958325 } }
]

// find the distance between each result object and startPoint using pythag.. 
// pythag theorem (a^2 + b^2 = c^2)
// harvesine theorem 

var originLat = startPoint.location.lat;
var originLong = startPoint.location.long;

results.forEach(destination => {
    // need to fix the calculation of the below to get the distance between points
    destination.location.distance = Math.pow(destination.location.lat - originLat, 2) + Math.pow(destination.location.long - originLong, 2)
    destination.location.distance = Math.pow(destination.location.distance, 2)
    destination.location.distance = Math.sqrt(destination.location.distance)
})
console.log(results)

results.sort((a, b) => {
    return a.location.distance - b.location.distance
})

console.log(results)

console.log(results[0].location.distance - results[1].location.distance)

// https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property#:~:text=%2F%2F%20arr%20is%20the%20array,%7B%20return%200%3B%20%7D%20%7D)%3B%20%7D%3B
// looked everywhere for a solution on how to sort the array of objects by particular key.. 
// champions.sort(function(a, b) { return b.level - a.level }).slice(...

// tried to use a package called Agile.js
// _.orderBy(results, location.distance)

