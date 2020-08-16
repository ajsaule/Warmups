// It's approaching lunch hour… let's collect orders. 
// Create a new file called lunch_orders.rb to complete this exercise.

// Desired structure array of objects: 
// var lunchOrders = [
//    { Joe: ["order1", "order2"] }
//]

var lunchOrders = []


// Create a program that collects lunch orders. Prompt:
// Name for order: (enter name)
var arrIterator = 0

while (nextOrder !== 'n') {
    var orderName = prompt('Name for your order:')
    lunchOrders.push({ name: `${orderName}` })
    var orderNum = 0
    while (anotherItem !== 'n') {
        var orderItem = prompt(`${orderName} wants to order:`)
        lunchOrders[arrIterator][`order${orderNum}`] = `${orderItem}`
        var anotherItem = prompt('Would you like to order another item? (y/n)')
        orderNum++
    }
    arrIterator++
    var nextOrder = prompt('Does your friend want anything for today (y/n)')
}

for (let i = 0; i < lunchOrders.length; i++) {
    console.log(`${lunchOrders[i].name} ordered ${lunchOrders[i].order0}, ${lunchOrders[i].order1} & ${lunchOrders[i].order2}`)
}

alert('Thank you for shopping with Coles, the fresh food people.')

// dont let it hit the counter before the first person has made their orders 

// lunchOrders[0][orderName].push(prompt(`${ orderName } wants to order: `))

// var quit = prompt('Is that all for today (y/n)')

// {name} wants to order: (enter item)
// var orderItem = prompt(`${ orderName } wants to order: `)



// Store the name/order data. When storing data, 
// do it in such a way that additional order items may be added for the person's name.
// Example: Greg can order a Burger, and then add Fries to his order later.
// After storing data, prompt the user with:
// Add another item to the order? (y/n)
// Repeat steps 1 & 2 if the answer is "y"
// After the user completes adding orders, print out:
// "All orders: {order data}"
// Keep going...
// Rather than printing out a blob of raw lunch order data, 
// print each name's orders on a separate line, formatted as one of the following:

// "Greg ordered a sandwich"
// "Peter ordered a burger & fries"
// "Travis ordered a salad, apple & water"
// You may have to do some hunting in Ruby docs!