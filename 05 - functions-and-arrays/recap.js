// Variables, Strings and Numbers

// var identifier = value

var myName = "Marten"

// Change variable

myName = "Simon"

// Conncetinate variables (String)

var myLastName = "Sievers"
var fullName = myName + " " + myLastName // Old way
// var fullName = `${myName} ${myLastName}`  // New way


// Arithmetic operations
var number1 = 10
var number2 = 5

// Add
var addResult = number1 + number2

// Subtract
var subResult = number1 - number2

// var validZip = zip > 1500 && zip < 2500


// Conditional Statements & Loops (If, For)
// If number1 is bigger than number2 say "Right"
// Else say "wrong!"

number1 = 5
// If
if (number1 > number2) {
    console.log("Right")
} else if (number1 == number2) {
    console.log("Equal")
} else {
    console.log("Wrong!")
}

// For
// Print "Hello World" 10x times
// for (initialize, condition, increment) {
//     // Your code
// }


for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Hello, World")
    }
}



// Objects
var me = {
    firstName: "Marten",
    lastName: "Sievers",
    birthday: 1991,
    zip: 2000,
    phone: 12435678,
    email: "maiol@mail.com",
    gender: "male",
    // age: function() {
    //     2019 - birthday
    // }
}

console.log(me.age)

// If we only want to print the firstName
// Now we use the dot notation
console.log(me.firstName)
console.log(me.lastName)

// Change the zip of me
me.zip = 1500




// Functions






// Arrays






// Classes






// Browser