// Write a program to decode this message:

// **NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.**

// This is a form of cryptography known as the Caesar Ciper. It has a **shift parameter** of **3**.

var stringToDecode = "NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG."

const codeCracker = (str) => {
    var arr = str.split("")
    var decodeArr = []
    var decodeNumber = 3
    arr.forEach(elm => {
        elm.toLowerCase()
        if (/[^\.]/.test(elm)) {
            decodeArr.push(elm.charCodeAt(0))
        } else {
            decodeArr.push(elm)
        }
    })
    
    var plainMessageArr = []
    decodeArr.forEach(elm => { 
        if (/[^\.]/.test(elm)) {
            elm -= decodeNumber
            plainMessageArr.push(String.fromCharCode(elm))
        } else {
            plainMessageArr.push(elm)
        }
    })

    var decodedMessage = plainMessageArr.join("")
    console.log(decodedMessage)
}

console.log(codeCracker(stringToDecode))

// try method of converting the two array's or tables.. into two seperate tables where we can 



// console.log('h'.charCodeAt(0) - 96)
// var conversion = String.fromCharCode(8)
// console.log(conversion)

// Instead of writing messages with the normal alphabet:

// ```
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// ```

// lets shift every letter by 3 to as follows:

// ```
// DEFGHIJKLMNOPQRSTUVWXYZABC
// ```

// which means if the original message is `HELLO`. 
// The encrypted message will be `KHOOR`

// ```
// H is now K
// E is now H
// L is now O
// L is now O
// O is now R
// ```

// ## decode the second secret message:

// **ERQXV ILIWHHQ PLQXWHV EUHDN**