var divPointer = document.querySelectorAll('.grid div')

function turnRed() {
    if (divPointer[0].style.backgroundColor == "red" &&
        divPointer[1].style.backgroundColor == "red" &&
        divPointer[2].style.backgroundColor == "red") {
        divPointer[0].style.backgroundColor = "green";
        divPointer[1].style.backgroundColor = "green";
        divPointer[2].style.backgroundColor = "green";
    } else {
        event.target.style.backgroundColor = "red";
    }
    console.log('working')
}

for (var i = 0; i < divPointer.length; i++) {
    divPointer[i].addEventListener('click', turnRed)
}