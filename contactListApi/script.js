const BTN_DELETE_CONTACT = "deleteBtn";
const NEW_CONTACT_TEMPLATE_SELECTOR = ".newContactTemplate";

const inputName = document.querySelector("#inputName");
const inputSurname = document.querySelector("#inputSurname");
const inputPhone = document.querySelector("#inputPhone");

const existedContacts = document.querySelector("#tableForCreatedContacts");
const contactTemplate = document.querySelector("#contactTemplate").innerHTML;
const btnAddContact = document.querySelector("#addContact");
const newContactElement = document.querySelector(".newContactTemplate");

btnAddContact.addEventListener("click", onButtonAddContactClick);
existedContacts.addEventListener("click", onExistedContactsClick);

getContactList();

function onButtonAddContactClick(e) {
    addContact(e);

    cleanInputField();
}

function onExistedContactsClick(e) {
    const classList = e.target.classList;

    const contactItem = e.target.closest(NEW_CONTACT_TEMPLATE_SELECTOR);

    if (classList.contains(BTN_DELETE_CONTACT)) {
        deleteContact(contactItem);
    }
}

function getContactList() {
    contactListApi
        .getList()
        .then((contactList) => {
            contactList.forEach((contact) => addAContactToHTML(contact));
        })
        .catch(showError);
}

function createContact(contact) {
    contactListApi
        .create(contact)
        .then((contact) => addAContactToHTML(contact))
        .catch(showError);
}

function deleteContact(contactItem) {
    let id = contactItem.dataset.id;

    contactListApi.delete(id).then(contactItem.remove()).catch(showError);
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

function addAContactToHTML(contact) {
    const html = generateContactHTML(contact);

    existedContacts.insertAdjacentHTML("beforeend", html);
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
}

function showError(error) {
    alert(error.message);
}
