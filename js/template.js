fetch('header.html')
    .then((response) => response.text())
    .then((template) => {
        document.getElementById('header-template').innerHTML = template;
    })
    .catch((error) => {
        console.error('Error fetching template:', error);
    });

function showLogoutButton() {
    document.getElementById('logout-container').classList.toggle('d-none');
}
