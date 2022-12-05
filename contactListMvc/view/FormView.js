class FormView extends View {
    INPUT_NAME_CONTACT = "#inputName";
    INPUT_SURNAME_CONTACT = "#inputSurname";
    INPUT_PHONE_CONTACT = "#inputPhone";
    static BTN_ADD_CONTACT = "#addContact";

    $inputName = $(this.INPUT_NAME_CONTACT);
    $inputSurname = $(this.INPUT_SURNAME_CONTACT);
    $inputPhone = $(this.INPUT_PHONE_CONTACT);

    constructor(options) {
        super();
        this.options = options;
        this.$container = this.init();
    }

    onButtonAddContactClick(e) {
        e.preventDefault();
        const contact = this.getInputFieldValue();

        /*
        if (
            this.isEmptyStrValidation(contact.name) ||
            this.isEmptyStrValidation(contact.surname)
        ) {
            return;
        }
        if (this.isNotPhoneValidation(contact.phone)) {
            return;
        }
		*/

        this.options.onAdd(contact);
        this.cleanInputField();
    }

    getInputFieldValue() {
        return {
            name: inputName.value,
            surname: inputSurname.value,
            phone: inputPhone.value,
        };
    }

    cleanInputField() {
        inputName.value = "";
        inputSurname.value = "";
        inputPhone.value = "";
    }

    setInputFieldValue(contactData) {
        //TODO
    }

    isEmptyStrValidation(input) {
        if (input == "") {
            alert("Incorrent contact name or surnname!");
            return true;
        }

        return false;
    }

    isNotPhoneValidation(input) {
        if (isNaN(input) || input == "") {
            alert("Incorrent contact phone number!");
            return true;
        }

        return false;
    }
}
