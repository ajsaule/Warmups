// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


// function convertHTML(str) {
//     const htmlEntities = {
//         "&": "&amp",
//         "<": "&lt",
//         ">": "&gt",
//         ">": "&gt",
//         '"': "&quot",
//         "'": "&apos;",
//     }
//     return str.replace(/([&<>\"'])/g, matched => htmlEntities[matched])
//   }
  
//   console.log(convertHTML("Dolce & Gabanna"));
  

// Solution 2 

function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp",
        "<": "&lt",
        ">": "&gt",
        ">": "&gt",
        '"': "&quot",
        "'": "&apos;",
    }
    // using some array methods instead of RegEx
    return str
        .split("")
        .map(entity => htmlEntities[entity] || entity)
        .join("")
  }
  
  console.log(convertHTML("Dolce & Gabanna"));