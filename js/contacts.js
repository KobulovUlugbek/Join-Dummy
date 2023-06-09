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

load();

function initContacts() {
    renderContactLeft();

}

function renderContactLeft() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let contactList = document.getElementById(`sortContactListing`);
    contactList.innerHTML = '';

    for (let j = 0; j < alphabet.length; j++) {
        const letter = alphabet[j];
        let contactsIncludingLetter = [];
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName.charAt(0).toLowerCase() === letter) {
                contactsIncludingLetter.push(contacts[i]);
            }
        }
        if (contactsIncludingLetter.length > 0) {
            contactList.innerHTML += `
        <div class="contactGroup">
        <h2 class="groupLetter">${letter.toUpperCase()}<div class="line"></div></h2>${contactsIncludingLetter.map(contact => contactHTML(contact)).join('')}</div>
        
        `
        }
    }
}

function contactHTML(contact) {
    const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);
    // Überprüft, ob der Kontakt bereits eine Farbe hat
    const color = contact.color ? contact.color : contactColor();

    // Speichert die Farbe im Kontakt und im Local Storage
    contact.color = color;
    saveContactsToLocalStorage();
    //const color = contactColor();
    return `
<div onclick="showContactDetails(${contacts.indexOf(contact)},'${color}')" class="initialsSectionLeft" >
<div class="circleLeft">
  <span class="initialsLeft" style="background-color: ${color}">${initials}</span>
</div>
<div class="contactNameLeft">
  <h2>${contact.firstName} ${contact.lastName}</h2>
  <a href="mailto:${contact.email}" class="taskForNameLeft">${contact.email}</a>
</div>
</div>
`;
}

function saveContactsToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

//contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
//const contact = contacts[i];


function showContactDetails(index, color) {
    const contact = contacts[index];
    const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);

    document.getElementById(`initialsSectionRight`).innerHTML = '';

    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const isResponsiveView = windowWidth < 1000;
    const boardDescription = document.getElementById('boardDescription');

    if (isResponsiveView) {
        // Ausblenden der Kontaktliste
        document.getElementById('contactContainer').style.display = 'none';
        document.getElementById('addContactContainer').classList.add('hidden');

        boardDescription.style.display = 'none';
        document.getElementById('initialsSectionRight').classList.add('hidden');

    } else {
        // Einblenden der Kontaktliste
        document.getElementById('contactContainer').style.display = '';

        boardDescription.style.display = '';
        document.getElementById('initialsSectionRight').classList.remove('hidden');
        document.getElementById('addContactContainer').classList.remove('hidden');

    }

    document.getElementById(`initialsSectionRight`).innerHTML = `
    <div class="initialsSection">
                                    <div class="circle">
                                        <span class="initials" style="background-color: ${color}">${initials}</span>
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
                                        <div onclick="editContact(${index},'${color}')" class="contactEdit">
                                            <img class="editPencil" src="img/pencil-icon-edit.png">
                                            <p>Edit Contact</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mailContact">
                                    <p><b>Email</b></p>
                                    <a href="mailto:${contact.email}">${contact.email}</a>
                                </div>
                                <div class="phoneContact">
                                    <p><b>Phone</b></p>
                                    <p><a href="tel:${contact.phone}">${contact.phone}</a></p>
                                </div>                                
                                <div> <div id="respBTNsAdaption" class="respBTNsAdaption">
                                <button onclick="deleteContact(${index})" class="cancelContactBtnMobile">
                                    <img class="" src="img/delete.png" alt="delete contact">
                                </button>
                                <button onclick="editContact(${index},'${color}')" class="createContactBtnMobil">
                                <img class="" src="img/whitePencil.png" alt="edit contact">
                            </button></div></div>
                                `;

}
window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const isResponsiveView = windowWidth < 1000;

    if (isResponsiveView) {
        // Ausblenden der initialsSectionRight
        document.getElementById('initialsSectionRight').classList.add('hidden');
    } else {
        // Einblenden der initialsSectionRight
        document.getElementById('initialsSectionRight').classList.remove('hidden');
        boardDescription.style.display = '';
        document.getElementById('addContactContainer').classList.remove('hidden');
    }

    if (!isResponsiveView) {
        // Einblenden der Kontaktliste
        document.getElementById('contactContainer').style.display = '';

    }
});



//show function  ende
//letzter teil

function openOverlayCardEdit() {
    document.getElementById('overlayEditContactContainer').style.display = "flex";
    document.body.style.overflow = "hidden";
};

function editContact(i, color) {

    const contact = contacts[i];
    const initials = contact.firstName.charAt(0) + contact.lastName.charAt(0);

    document.getElementById('overlayContainer').style.display = "flex"; //overlayContainer //overlayEditContactContainer
    document.body.style.overflow = "hidden";

    const overlayContainer = document.getElementById('overlayContainer');//overlayEditContactContainer
    overlayContainer.innerHTML = `
    <div id="overlayEditContactContainer" class="overlayEditContactContainer">      
    <div class="headlineEdit">
            <img class="overlayLogo" src="img/Join-icon.png" alt="Join Logo">
            <div class="overlayHeadlineEdit">Edit contact</div>
            <span class="overlayLine"></span>
          </div>
          <div class="editSection">
            <div class="initialsSectionOverlay">
              <div class="circle">
                <span class="initials" style="background-color: ${color}">${initials}</span>
              </div>
              <div class="editInputs">
                <div class="closingCross">
                  <img onclick="closeOverlayCardEdit()" src="img/cross.png" alt="Close Edit">
                </div>
                <input class="inputs" type="text" required="" placeholder="Name"
                  style="background-image: url('./img/user.png')" value="${contact.firstName} ${contact.lastName}">
                <input class="inputs" type="email" required="" placeholder="Email"
                  style="background-image: url('./img/mail-icon.png')" value="${contact.email}">
                <input class="inputs" type="tel" required="" placeholder="Number"
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
          </div>
        `;

};

function closeOverlayCardEdit() {
    document.getElementById('overlayContainer').style.display = "none";
    document.body.style.overflow = "scroll";
};

function openOverlayCardADD() {
    document.getElementById('overlayContainerADD').style.display = "flex";//overlayADDContactContainer
    document.body.style.overflow = "hidden";

};

function closeOverlayCardADD() {
    document.getElementById('overlayContainerADD').style.display = "none";
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
    save();
    closeOverlayCardADD();
}

function splitNames(name) {
    var names = name.split(' ');

    console.log("names=" + names); // Überprüfung der Ausgabe im Konsolen-Log
    return names;
}

function deleteContact(i) {
    // Code zum Löschen des ausgewählten Kontakts aus dem Array und Local Storage
    const initials = document.querySelector('.initials').textContent;

    // Finde den Kontakt im Array basierend auf den Initialen oder anderen eindeutigen Daten
    const contactIndex = contacts.findIndex(contact => contact.firstName.charAt(0) + contact.lastName.charAt(0) === initials);

    if (contactIndex !== -1) {
        // Entferne den Kontakt aus dem Array
        const deletedContact = contacts.splice(contactIndex, 1)[0];

        // Speichere das aktualisierte Array im Local Storage
        localStorage.setItem('contacts', JSON.stringify(contacts));

        // Weitere Aktionen, z.B. Aktualisierung der Anzeige usw.
        renderContactLeft();
        save();
        // Schließe das Overlay
        closeOverlayCardEdit();
        showContactDetails(i);


        console.log('Kontakt gelöscht:', deletedContact);
    }
}

function saveContact(i) {
    // Code zum Speichern des bearbeiteten Kontakts im Array und Local Storage
    const initials = document.querySelector('.initials').textContent;
    const nameInput = document.querySelector('.inputs[placeholder="Name"]');
    const emailInput = document.querySelector('.inputs[placeholder="Email"]');
    const numberInput = document.querySelector('.inputs[placeholder="Number"]');

    const fullName = nameInput.value.split(' ');
    const firstName = fullName[0];
    const lastName = fullName[1];

    // Finde den Kontakt im Array basierend auf den Initialen oder anderen eindeutigen Daten
    const contactToUpdate = contacts.find(contact => contact.firstName.charAt(0) + contact.lastName.charAt(0) === initials);

    if (contactToUpdate) {
        // Aktualisiere die Kontaktdaten
        contactToUpdate.firstName = firstName;
        contactToUpdate.lastName = lastName;
        contactToUpdate.email = emailInput.value;
        contactToUpdate.phone = numberInput.value;

        // Speichere das aktualisierte Array im Local Storage
        localStorage.setItem('contacts', JSON.stringify(contacts));

        // Weitere Aktionen, z.B. Aktualisierung der Anzeige usw.
        renderContactLeft();
        save();
        // Schließe das Overlay
        closeOverlayCardEdit();
        showContactDetails(i);

        console.log('Kontakt aktualisiert:', contactToUpdate);
    }
}

function save() {
    let contactsAsText = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsAsText);
}

function load() {
    let contactsAsText = localStorage.getItem('contacts');
    if (contactsAsText) {
        contacts = JSON.parse(contactsAsText);
    }
}

function contactColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





