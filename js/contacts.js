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
          <div onclick="showContactDetails(${i})" class="initialsSectionLeft">
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

function showContactDetails(index) {
    const contact = contacts[index];
    const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);
    document.getElementById(`initialsSectionRight`).innerHTML = '';

    document.getElementById(`initialsSectionRight`).innerHTML = `
    <div class="initialsSection">
                                    <div class="circle">
                                        <span class="initials">${initials}</span>
                                    </div>
                                    <div class="contactName">
                                        <h2>${contact.firstName} ${contact.lastName}</h2>
                                        <span class="taskForName">+ ADD Task</span>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="contactInformation">
                                        <div class="contactGeneral">
                                            <p>Contact Information</p>
                                        </div>
                                        <div onclick="openOverlayCardEdit()" class="contactEdit">
                                            <img class="editPencil" src="img/pencil-icon-edit.png">
                                            <p>Edit Contact</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <p><b>Email</b></p>
                                    <a href="#">${contact.email}</a>
                                </div>
                                <div class="">
                                    <p><b>Phone</b></p>
                                    <p>${contact.phone}</p>
                                </div>`;

};

function openOverlayCardEdit() {
    document.getElementById('overlayEditContactContainer').style.display = "flex";
    document.body.style.overflow = "hidden";

};

function closeOverlayCardEdit() {
    document.getElementById('overlayEditContactContainer').style.display = "none";
    document.body.style.overflow = "scroll";
};

function openOverlayCardADD() {
    document.getElementById('overlayADDContactContainer').style.display = "flex";
    document.body.style.overflow = "hidden";

};

function closeOverlayCardADD() {
    document.getElementById('overlayADDContactContainer').style.display = "none";
    document.body.style.overflow = "scroll";
};