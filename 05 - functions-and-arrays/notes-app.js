/**
 * 1. Class for notes
 * 2. Array of notes
 * 3. Override
 * 
 * 
 */

// Initialize new array of notes
var notes = [{
    title: "Plan next vacation",
    body: "Book flights to Madrid"
}, {
    title: "Buy Breakfast",
    body: "Milk, Cereal & Fruits"
}, {
    title: "Walk the dog",
    body: "Don't forget to bring a leash"
}, {
    title: "Upgrade the Office",
    body: "Buy a new office chair"
}]

var reminder = [{
    title: "Wash clothes"
}, {
    title: "Walk the dog"
}]



// Print notes to console
function printNotes(arrayToPrint) {
    for (let i = 0; i < arrayToPrint.length; i++) {
        console.log(arrayToPrint[i].title)
    }
}

printNotes(notes)
printNotes(reminder)

