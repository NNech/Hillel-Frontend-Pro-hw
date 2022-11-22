const BTN_DELETE_CONTACT = "deleteBtn";
const CREATE_CONTACT_SELECTOR = "#createContactBtn";
const NEW_CONTACT_TEMPLATE_SELECTOR = ".newContactTemplate";
const CREATE_CONTACT_CONTAINER = "#tableForCreatedContacts";
const INPUT_NAME_CONTACT = "#inputName";
const INPUT_SURNAME_CONTACT = "#inputSurname";
const INPUT_PHONE_CONTACT = "#inputPhone";

const dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            addContact();
            cleanInputField();
        },
        Cancel: function () {
            dialog.dialog("close");
        },
    },
    close: function () {},
});

const $inputName = $(INPUT_NAME_CONTACT);
const $inputSurname = $(INPUT_SURNAME_CONTACT);
const $inputPhone = $(INPUT_PHONE_CONTACT);
const $existedContacts = $(CREATE_CONTACT_CONTAINER);
const $newContactElement = $(NEW_CONTACT_TEMPLATE_SELECTOR);

$existedContacts.on("click", "." + BTN_DELETE_CONTACT, onBtnDeleteContactClick);
$(CREATE_CONTACT_SELECTOR).on("click", onBtnCreateContactClick);

getContactList();

function onBtnCreateContactClick(e) {
    dialog.dialog("open");
}

function onBtnDeleteContactClick(e) {
    const classList = e.target.classList;

    const contactItem = e.target.closest(NEW_CONTACT_TEMPLATE_SELECTOR);

    if (classList.contains(BTN_DELETE_CONTACT)) {
        deleteContact(contactItem);
    }
}

function getContactList() {
    ContactListJquaryApi.getList()
        .then((contactList) => {
            renderContactList(contactList);
        })
        .catch(showError);
}

function renderContactList(contactList) {
    $existedContacts.html(contactList.map(generateContactHTML));
}

function deleteContact(contactItem) {
    let id = contactItem.dataset.id;

    ContactListJquaryApi.delete(id).then(contactItem.remove()).catch(showError);
}

function addContact() {
    const contact = getInputFieldValue();

    if (
        isEmptyStrValidation(contact.name) ||
        isEmptyStrValidation(contact.surname)
    ) {
        return;
    }
    if (isNotPhoneValidation(contact.phone)) {
        return;
    }

    createContact(contact);
}

function createContact(contact) {
    ContactListJquaryApi.create(contact)
        .then((contact) => renderContact(contact))
        .catch(showError);
}

function renderContact(contact) {
    const $contact = generateContactHTML(contact);

    $existedContacts.append($contact);
}

function generateContactHTML(contact) {
    return `<tr class ="newContactTemplate" data-id=${contact.id}>
				<td>${contact.name}</td>
					<td>${contact.surname}</td>
					<td>${contact.phone}</td>
					<td>
						<button class="deleteBtn">Delete</button>
					</td>
            </tr>`;
}

function isEmptyStrValidation(input) {
    if (input == "") {
        alert("Incorrent contact name or surnname!");
        return true;
    }

    return false;
}

function isNotPhoneValidation(input) {
    if (isNaN(input) || input == "") {
        alert("Incorrent contact phone number!");
        return true;
    }

    return false;
}

function getInputFieldValue() {
    return {
        name: inputName.value,
        surname: inputSurname.value,
        phone: inputPhone.value,
    };
}

function cleanInputField() {
    inputName.value = "";
    inputSurname.value = "";
    inputPhone.value = "";
    dialog.dialog("close");
}

function showError(error) {
    alert(error.message);
}
