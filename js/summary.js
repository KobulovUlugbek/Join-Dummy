/**
 * Initializes the user session when the page is loaded.
 * This function first retrieves the username stored in local storage under the key 'username'.
 * Once the username is retrieved, it calls the 'greetUser' function with this username as an argument.
 */
function init() {
    let username = localStorage.getItem('username');
    greetUser(username);
}

/**
 * Displays a greeting to the user.
 * This function changes the innerHTML of the HTML element with the ID 'greet-user' to the provided name.
 * This results in a visible greeting on the webpage that includes the user's name.
 */
function greetUser(name) {
    document.getElementById('greet-user').innerHTML = name;
}
