const inputName = document.querySelector("#inputName");
const inputSurname = document.querySelector("#inputSurname");
const inputPhone = document.querySelector("#inputPhone");

const tr = document.querySelector("#inputContact");
const contactTemplate = document.querySelector("#contactTemplate").innerHTML;
const btn = document.querySelector("#btn");

const TD_BTN_ITEM = ".btnItem";
const BTN_ITEM = "addContact";

btn.addEventListener("click", onButtonClick);

function onButtonClick(e) {
    addContact(e);

    cleanInputField();
}

function addContact() {
    /* const tdBtnItem = e.target.closest(TD_BTN_ITEM);
    const btnItem = e.target.classList.contains(BTN_ITEM);

    if (tdBtnItem) {
        if (!btnItem) {
            alert("Please use 'Add contact' button!");
            return;
        }
    }*/

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

    tr.insertAdjacentHTML("beforebegin", html);
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
