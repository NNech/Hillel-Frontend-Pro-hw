class FormModal {
    static INPUT_SELECTOR = "input, textarea";

    #dialog;
    #$input;

    constructor(modalELSelector, saveData) {
        this.#$input = $(FormModal.INPUT_SELECTOR);
        this.#dialog = $(modalELSelector).dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                Save: () => {
                    const data = this.getFormData();

                    saveData(data);
                    this.close();
                },
                Cancel: function () {
                    this.close.bind(this);
                },
            },
            close: function () {
                this.close.bind(this);
            },
        });
    }

    open() {
        this.#dialog.dialog("open");
    }

    close() {
        this.#dialog.dialog("close");
        this.clear();
    }

    clear() {
        this.#$input.val("");
    }

    getFormData() {
        return {
            description: description.value,
        };
    }
}
