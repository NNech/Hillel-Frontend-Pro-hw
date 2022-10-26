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

function onButtonAddContactClick(e) {
    addContact(e);

    cleanInputField();
}

function onExistedContactsClick(e) {
    const classList = e.target.classList;
    const todoItem = e.target.closest(NEW_CONTACT_TEMPLATE_SELECTOR);
    //classList.toggle("switch");
    todoItem.classList.toggle("switch");
    if (classList.contains(BTN_DELETE_CONTACT)) {
        todoItem.remove();
    }
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

    addContactToHTML(contact);
}

function addContactToHTML(contact) {
    const html = generateContactHTML(contact);

    existedContacts.insertAdjacentHTML("beforeend", html);
}

function generateContactHTML(contact) {
    return contactTemplate
        .replace("(name)", contact.name)
        .replace("(surname)", contact.surname)
        .replace("(phone)", contact.phone);
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
