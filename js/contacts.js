let contacts = [
    {
        'firstName': 'Ulugbek',
        'lastName': 'Kobulov',
        'email': 'kobulov@web.de',
        'phone': '+49 123 567 891',
    },
    {
        'firstName': 'Nils',
        'lastName': 'Scholz',
        'email': 'scholz@web.de',
        'phone': '+49 123 567 891',
    },
    {
        'firstName': 'Sascha',
        'lastName': 'Tichy',
        'email': 'tichy@web.de',
        'phone': '+49 123 567 891',
    },
    {
        'firstName': 'Sylvia',
        'lastName': 'Zartmann',
        'email': 'zartmann@web.de',
        'phone': '+49 123 567 891',
    },
    {
        'firstName': 'Nicole',
        'lastName': 'Holländer',
        'email': 'hollaender@web.de',
        'phone': '+49 123 567 891',
    },
]

function initContacts() {
    renderContactLeft();
}

function renderContactLeft() {
    contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);

        // Erstellen des HTML-Codes für den Kontakt
        document.getElementById('sortContactListing').innerHTML += `
          <div class="initialsSectionLeft">
            <div class="circleLeft">
              <span class="initialsLeft">${initials}</span>
            </div>
            <div class="contactNameLeft">
              <h2>${contact.firstName} ${contact.lastName}</h2>
              <a href="${contact.email}" class="taskForNameLeft">${contact.email}</a>
            </div>
          </div>
        `;
    }
}