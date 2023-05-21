let users = [
    {
        name: 'Guest',
        email: 'guest@com',
        password: 'guest123',
    },
];

/**
 * This asynchronous function handles the process of adding a new user to the 'users' list.
 * It retrieves the name, email, and password entered by the user from the respective input fields.
 * It then creates a new user object with the entered values and pushes it to the 'users' list.
 * After adding the user, it clears the input fields using the clearInputs() function.
 * It then navigates the user to 'login.html' with a query parameter 'msg' to display a success message, indicating that the registration has been successful.
 * Finally, it uses the setItem() function (presumably an asynchronous function to store data) to update the 'users' data item in the backend by converting the 'users' list into a JSON string.
 */
async function addUser() {
    let name = document.getElementById('sign-up-name');
    let email = document.getElementById('sign-up-email');
    let password = document.getElementById('sign-up-password');
    users.push({name: name.value, email: email.value, password: password.value});

    clearInputs(name, email, password);

    window.location.href = 'login.html?msg=Your registration has been successful. Welcome to our app!';
    await setItem('users', JSON.stringify(users));
}

/**
 * This function clears the values of the provided input fields.
 * It takes the 'name', 'email', and 'password' input fields as parameters and sets their values to an empty string, effectively clearing the user-entered data.
 */
function clearInputs(name, email, password) {
    name.value = '';
    email.value = '';
    password.value = '';
}
