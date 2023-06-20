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
    document.getElementById(`sortContactListing`).innerHTML = '';
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
                                        <div onclick="editContact(${index})" class="contactEdit">
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

function editContact(i) {

    const contact = contacts[i];
    const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);

    document.getElementById('overlayEditContactContainer').style.display = "flex";
    document.body.style.overflow = "hidden";

    const overlayContainer = document.getElementById('overlayEditContactContainer');
    overlayContainer.innerHTML = `
          <div class="headlineEdit">
            <img class="overlayLogo" src="img/Join-icon.png" alt="Join Logo">
            <div class="overlayHeadlineEdit">Edit contact</div>
            <span class="overlayLine"></span>
          </div>
          <div class="editSection">
            <div class="initialsSectionOverlay">
              <div class="circle">
                <span class="initials">${initials}</span>
              </div>
              <div class="editInputs">
                <div class="closingCross">
                  <img onclick="closeOverlayCardEdit()" src="img/cross.png" alt="Close Edit">
                </div>
                <input class="inputs" type="text" required="" placeholder="Name"
                  style="background-image: url('./img/user.png')" value="${contact.firstName} ${contact.lastName}">
                <input class="inputs" type="email" required="" placeholder="Email"
                  style="background-image: url('./img/mail-icon.png')" value="${contact.email}">
                <input class="inputs" type="text" required="" placeholder="Number"
                  style="background-image: url('./img/phone-icon.png')" value="${contact.phone}">
                <div>
                  <div class="editContainer">
                    <button onclick="deleteContact(${i})" class="deleteContactBtn">
                      <h3 class="deletecontactBTNcontent">Delete</h3>
                    </button>
                    <button onclick="saveContact(${i})" class="editContactBtn">
                      <h3 class="editcontactBTNcontent">Save</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

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

function createContact() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    let names = splitNames(name.value);

    if (names.length >= 2) {

        let firstName = names[0];
        let lastName = names[1];

        let newContact = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email.value,
            'phone': phone.value,
        };
        contacts.push(newContact);
        renderContactLeft();
    } else {
        console.log('Ungültiger Name');
    }
    //document.getElementById(`message${i}`).value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function splitNames(name) {
    var names = name.split(' ');

    console.log("names=" + names); // Überprüfung der Ausgabe im Konsolen-Log
    return names;
}

function deleteContact() {

}