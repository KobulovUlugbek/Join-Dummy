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
 *
 * @param {string} id1 - The id of the container to be hidden.
 * @param {string} id2 - The id of the container to be displayed.
 * @param {string} id3 - The id of the first additional element to be hidden.
 * @param {string} id4 - The id of the second additional element to be hidden.
 *
 * The 'd-none' class is added to hide an element and removed to show an element.
 */
function switchContainer(id1, id2, id3, id4) {
    document.getElementById(id1).classList.add('d-none');
    document.getElementById(id2).classList.remove('d-none');
    document.getElementById(id3).classList.add('d-none');
    document.getElementById(id4).classList.add('d-none');
}

/**
 * This function switches the view back to the login container from either the sign-up container or the password recovery container.
 *
 * @param {string} id1 - The id of the login container. This container will be displayed.
 * @param {string} id2 - The id of the container to be hidden (either sign-up or password recovery).
 * @param {string} id3 - The id of the element to be displayed (the 'Sign up' button in the hidden state).
 *
 * The 'd-none' class is removed to display an element and added to hide an element.
 */
function backToLoginContainer(id1, id2, id3) {
    document.getElementById(id1).classList.remove('d-none');
    document.getElementById(id2).classList.add('d-none');
    document.getElementById(id3).classList.remove('d-none');
}

function loginUser() {
    let email = document.getElementById('log-in-email');
    let password = document.getElementById('log-in-password');
    let user = users.find((u) => u.email === email.value && u.password === password.value);

    if (user) {
        window.location.href = 'startseite.html';
    } else {
        document.getElementById('user-not-found').classList.remove('d-none');
    }
}
