/**
 * @VARIABLES
 */
// Declaration & Different types
// Placeholder to store some value
var  myName = 'Marten'
myName = 'Tim'

// Const = Constant and can not be reassigned
const myRealName = 'Marten'
// myName = 'Tim' // ERROR

 // Arithmetic operations
const numOne = 1
const numTwo = '3'

console.log(numOne * numTwo)

// If the operation doesn't define that the variables have to be integers,
//  we need to use type coercion to tell JS that our argument is a number
console.log(numOne + Number(numTwo))


/**
 * @IFSTATEMENT & @TERNARY
 */
// Syntax

let n = 2

// If(Condition) {''Code Block''}
if (n === 1) {
    console.log('n is 1')
} else if (n === 2) {
    console.log('n is 2' )
} else {
    console.log('n is neither 1 or 2')
}

// condtion ? code that should run if condition is true  : code that should run if condition is false
n === 2 ? console.log('n is 2') : console.log('n is not equal to 2')


/**
 * @FUNCTIONS
 */
// Function Syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// Declaration, Expression, Arrow Functions (ES6)
function myFunctionDeclaration() {
    console.log('Function declaration')
}

const myFunctionExpression = function() {
    console.log('Function expression')
}

const myArrowFunction = () => {
    console.log('Arrow Function')
}


// Parameter & Arguments
const multiplyByHundred = (num1, num2, num3) => {
    const factor = 100
    let result = num3 * factor + num1 + num2
}

const myResult = multiplyByHundred(1, 2, 3)
console.log(myResult)


// Default Parameters
function functionWithDefaults (n = 2, m = 5) {
    console.log(n * m)
}

functionWithDefaults(2, 2)  // 4
functionWithDefaults(2)     // 10


// Return vs. Void
function returnFunction() {
    return 'This return function returns this String to the place its invoked'
}

function voidFunction() {
    console.log('This void function prints from inside')
}

console.log(returnFunction())
voidFunction()



/**
 * @ARRAYS
 */

// Declaration
 const cars = []
 const numbers = [1, 4, 5, 2, 9, 7]
 const people = ['Jan', 'Henrik', 'Jerry', 'Phil']


 // Methods

 // Add new element
 const bmw = '3 series'
 cars.push(bmw)

console.log(cars)


// Remove last number from numbers by index (numbers.length - 1)
numbers.splice(numbers.length - 1, 1)

console.log(numbers)


// Find
const findJerry = people.find(function(person) {
    return person == 'Jerry'
})

console.log(findJerry)


// Sort numbers from low to high
const sortedNumbers = numbers.sort((a, b) => {
    if(a < b) {
        return -1
    } else {
        return 1
    }
})

console.log(sortedNumbers)



/**
 * @CALLBACK
 */

const users = ['Marten', 'Henrik', 'Jan']

// Syntax
// Declare a function that uses a callback as a parameter
function forEachElement(callback) {
    for (let i = 0; i < people.length; i++) {
        callback(people[i], i)
    }
}

// Define the callback function and pass it to the function as argument
forEachElement(function(person, index) {
    console.log(`${person} has index of ${index}`)
})


/**
 * @OBJECTS
*/

// Object Declaration
let marten = {
    first: 'John',
    last: 'Doe',
    getFullName()  {
        console.log(`${this.first} ${this.last}`)
    }
}

console.log(marten.getFullName())


/**
 * @CLASSES
 */

// The Constructor function




// Properties




// Methods

/**
 * @ASYNC
 */

