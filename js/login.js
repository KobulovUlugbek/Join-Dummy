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
 * This function is responsible for handling the user login process.
 * It first calls the function saveEmailInLocalStorage() which presumably saves the entered email in local storage for later use ('Remember me' feature).
 * It then retrieves the email and password entered by the user in the respective input fields.
 * Afterwards, it attempts to find a user in the 'users' list that matches both the entered email and password.
 * If such a user is found, it navigates to 'startseite.html', presumably the home page of the logged-in user.
 * If no matching user is found, it displays an error message by removing the 'd-none' class from the element with the ID 'user-not-found'.
 */
function loginUser() {
    saveEmailInLocalStorage();
    let email = document.getElementById('log-in-email');
    let password = document.getElementById('log-in-password');

    let user = users.find((u) => u.email === email.value && u.password === password.value);
    if (user) {
        window.location.href = 'startseite.html';
    } else {
        document.getElementById('user-not-found').classList.remove('d-none');
    }
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
