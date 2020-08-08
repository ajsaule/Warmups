// let wall = document.querySelector("#wall")

// let numOfBeers = 0
// while (numOfBeers <= 4) {
//     wall.innerHTML += "<p>🍺</p>"
//     numOfBeers++;
// }

// var beer = document.querySelectorAll('#wall > p')

// const remove = (event) => {
//     event.target.style.display = 'none'
//     if (beer.forEach(node => style.display) === 0) {
//         let numOfBeers = 0
//         while (numOfBeers <= 4) {
//             wall.innerHTML += "<p>🍺</p>"
//             numOfBeers++;
//         }
//     }
//     beer = document.querySelectorAll('#wall > p')
//     console.log(beer.length)
// }
// beer.forEach(node => node.addEventListener('click', remove))


// DT's code-along
var wall = document.querySelector('.wall')
var beers = document.querySelectorAll('.beer')

function createWallOfBeer(num = 99) {value
    for (let i = 0; i < num; i ++) {
        let newSpan = document.createElement('span')
        newSpan.classList.add('beer')
        newSpan.textContent = '🍺'
        wall.appendChild(newSpan)
    }    
}

createWallOfBeer()

function handleRemoveBeer(event) {
    // event delegation 
    if (event.target.classList.contains('beer')) {
        event.target.remove()
    }
    if (wall.children.length === 0) {
        createWallOfBeer()
    }
}

// event bubbling, the parent will listen for any events on the descendents 
// if new children are added under this parent, the parent will handle all the events 
wall.addEventListener('click', handleRemoveBeer)

// beers.forEach(beer => {
//     beer.addEventListener('click', handleClick)
// })
