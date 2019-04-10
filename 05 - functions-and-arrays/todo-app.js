/**
 * 1. Initialize new array with todos
 * 2. Create a new function to print all todos
 * 3. Create a function called 'todoSummary' to print how many todos are left
 *      "You have 3 todos left"
 * 4. Call both functions!!!
 */

var todos = [{
    title: 'Walk the dog',
    completed: false
}, {
    title: 'Clean my room',
    completed: false
}, {
    title: 'Read a book',
    completed: true
}, {
    title: 'Buy food',
    completed: false
}, {
    title: 'Book a flight',
    completed: true
}]


// Print all todos
function printTodos() {
    for (let i = 0; i < todos.length; i++) {
        if (!todos[i].completed) {
            console.log(todos[i].title)
        }
    }
}

// function printTodosVar() {
//     todos.forEach(function (todo) {
//         if (!todo.completed){
//             console.log(todo.title)
//         }
//     })
// }



// Print Summary
function todosSummary() {
    var count = 0
    todos.forEach(function (todo) {
        if (!todo.completed) {
            count++
        }
    })
    console.log(`You have ${count} todo left.`)
}



// Add to array
function addTodo(newTodo) {
    todos.push(newTodo)
}

// Create new todo to add to the array
var nextWeek = {
    title: "Go on vacation",
    completed: false
}


addTodo(nextWeek)


// Delete 1 todo
todos.splice(0, 1)


todosSummary()

// Call print function
printTodos()