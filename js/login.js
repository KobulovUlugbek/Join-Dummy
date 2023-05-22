/**
 * This JavaScript code snippet captures a message parameter ('msg') from the URL's query string
 * and displays it in an HTML element with the id 'msg-box'. If there's an animation applied to this element,
 * the element will be hidden after the animation ends. It's important to note that if the 'msg' parameter doesn't exist in the URL,
 * no action will be taken.
 */
const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get('msg');
let msg_box = document.getElementById('msg-box');

if (msg) {
    msg_box.innerHTML = msg;
    msg_box.addEventListener('animationend', function () {
        this.style.display = 'none';
    });
} else {
    msg_box.style.display = 'none';
}

/**
 * This function is called upon application startup.
 * - getUsers() retrieves the list of users from the backend.
 * - checkEmailInLocalStorage() verifies if there's an email saved in local storage ("Remember me" feature) and sets up the UI accordingly.
 * - deleteAnimations() remove any initial loading animations to reveal the main UI.
 */
function init() {
    getUsers();
    checkEmailInLocalStorage();
    deleteAnimations();
}

/**
 * This asynchronous function retrieves the 'users' data item using the getItem() function.
 * Once it receives the data (as a Promise), it attempts to parse it from a JSON string into a JavaScript object.
 * The result is then stored in the global 'users' variable.
 * Note: This function assumes that getItem('users') will return a valid JSON string, and will throw a SyntaxError if it does not.
 */
async function getUsers() {
    users = JSON.parse(await getItem('users'));
}

/**
 * This function removes a CSS class from the element with the id 'login-sign-up-container'
 * after a delay of 3000 milliseconds
 * The CSS class removed is 'login-header-container-sign-up'.
 */
function deleteAnimations() {
    setTimeout(() => {
        document.getElementById('login-sign-up-container').classList.remove('login-header-container-sign-up');
    }, 3000);
}

/**
 * This function switches the view between different containers on the page.
 * It's invoked when the 'Sign up' button or 'Forgot my password' is clicked.
 * The 'd-none' class is added to hide an element and removed to show an element.
 */
function switchContainer(id1, id2, id3) {
    document.getElementById(id1).classList.add('d-none');
    document.getElementById(id2).classList.remove('d-none');
    document.getElementById(id3).classList.add('d-none');
}

/**
 * This function switches the view back to the login container from either the sign-up container or the password recovery container.
 * The 'd-none' class is removed to display an element and added to hide an element.
 */
function backToLoginContainer(id1, id2, id3) {
    document.getElementById(id1).classList.remove('d-none');
    document.getElementById(id2).classList.add('d-none');
    document.getElementById(id3).classList.remove('d-none');
}

/**
 * Handles the login process for a user.
 * This function first prevents the default form submission event from occurring using 'event.preventDefault()'.
 * The function then calls 'saveEmailInLocalStorage()', to save the user's entered email into local storage for future use.
 * After retrieving the values of the 'email' and 'password' input fields, it calls 'ifUserGoLogin()' function
 * with the 'email' and 'password' as parameters to handle the login process.
 */
function loginUser(event) {
    event.preventDefault();
    saveEmailInLocalStorage();

    let email = document.getElementById('log-in-email');
    let password = document.getElementById('log-in-password');
    ifUserGoLogin(email, password);
}

/**
 * Checks if the entered email and password match any user and handles the login process accordingly.
 * The function first searches the users for a user that matches both the entered email and password.
 * If such a user is found, the page is redirected to 'startseite.html'.
 * and the username of the user is saved into local storage.
 * If no matching user is found, an error message is displayed.
 */
function ifUserGoLogin(email, password) {
    let user = users.find((u) => u.email === email.value && u.password === password.value);
    if (user) {
        window.location.href = 'startseite.html';
        localStorage.setItem('username', user.name);
    } else {
        document.getElementById('user-not-found').classList.remove('d-none');
    }
}

/**
 * Provides a method for logging in a user as a guest.
 * This function fills the 'email' and 'password' input fields with the predefined values of 'guest@web.de' and 'guest123'.
 * After filling in these values, it redirects the page to 'startseite.html'.
 * Lastly, it saves the string 'Guest' into local storage under the key 'username', presumably to identify the user as a guest throughout their session.
 */
function loginGuest() {
    document.getElementById('log-in-email').value = 'guest@web.de';
    document.getElementById('log-in-password').value = 'guest123';

    window.location.href = 'startseite.html';
    localStorage.setItem('username', 'Guest');
}

/**
 * This function handles the email in the local storage of the browser.
 * It first retrieves the email entered by the user and the current checked state of a checkbox ("Remember me" feature).
 * If the checkbox is checked, the function saves the entered email in local storage with the key 'email'. This will allow the email to persist across browser sessions.
 * If the checkbox is not checked, the function removes any previously saved 'email' item from local storage. This ensures that no email is remembered when the "Remember me" feature is not used.
 */
function saveEmailInLocalStorage() {
    let email = document.getElementById('log-in-email').value;
    let checkbox = document.getElementById('login-checkbox').checked;

    if (checkbox) {
        localStorage.setItem('email', email);
    } else {
        localStorage.removeItem('email');
    }
}

/**
 * This function checks if there is a saved email in the browser's local storage.
 * If a saved email is found, it sets the value of the 'log-in-email' input field to the saved email
 * and checks the 'login-checkbox' checkbox, indicating that the "Remember me" feature is active.
 * This allows the user's email to be automatically filled in when the page loads, if they have previously opted to be remembered.
 */
function checkEmailInLocalStorage() {
    let savedEmail = localStorage.getItem('email');

    if (savedEmail) {
        document.getElementById('log-in-email').value = savedEmail;
        document.getElementById('login-checkbox').checked = true;
    }
}
