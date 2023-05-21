let users = [
    {
        name: 'Guest',
        email: 'guest@com',
        password: 'guest123',
    },
];

function addUser() {
    let name = document.getElementById('sign-up-name');
    let email = document.getElementById('sign-up-email');
    let password = document.getElementById('sign-up-password');
    users.push({name: name.value, email: email.value, password: password.value});

    clearInputs(name, email, password);

    window.location.href = 'login.html?msg=Your registration has been successful. Welcome to our app!';
}

function clearInputs(name, email, password) {
    name.value = '';
    email.value = '';
    password.value = '';
}
