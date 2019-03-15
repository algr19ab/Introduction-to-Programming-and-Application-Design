/**
 * This is the main function file for our registration page.
 * It collects all the user data from the form and creates
 * a new instance of the User class and adds it to the DB.
 * @Marten
 */

// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')


// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')

    // If the user has agreed to the terms and conditions,
    // I create a new user object from his input
    if(checkboxUI.checked) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value

        // To store the user I add him to the array of users (DB)
        users.push(new User(firstName, lastName, username, password))
    }
}