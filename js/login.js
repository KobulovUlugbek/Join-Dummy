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
