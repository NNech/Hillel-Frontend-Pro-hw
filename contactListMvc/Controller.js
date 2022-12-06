class Controller {
    #$wrapEl;

    constructor($wrapEl) {
        this.#$wrapEl = $wrapEl;
        this.collection = new Collection();
        this.contactListView = new ContactListView({
            onDelete: (id) => this.deleteContact(id),
        });
        this.contactFormView = new ContactFormView({
            onAdd: (contact) => this.addContact(contact),
        });

        this.contactFormView.appendTo(this.#$wrapEl);
        this.contactListView.appendTo(this.#$wrapEl);
        this.collection
            .fetch()
            .then((list) => this.contactListView.renderContactList(list));
    }

    addContact(contact) {
        this.collection
            .create(contact)
            .then((contectWithId) => {
                this.contactListView.renderContact(contectWithId);
            })
            .catch(this.showError);
    }

    deleteContact(id) {
        this.collection.delete(id);
        this.contactListView.removeContact(id);
    }

    showError(error) {
        alert(error.message);
    }
}
