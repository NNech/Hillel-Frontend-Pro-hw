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
        if (contact.id) {
            // update
            this.collection
                .update(contact.id, contact)
                .then(() => {
                    this.contactListView.replaceItem(contact.id, contact);
                })
                .catch(this.showError);
        } else {
            // create
            this.collection.create(contact).then(() => {
                this.contactListView.renderContact(contact);
            });
        }
    }

    deleteContact(id) {
        this.collection.delete(id);
        this.contactListView.removeContact(id);
    }

    showError(error) {
        alert(error.message);
    }
}
