class Collection {
    #list = [];

    fetch() {
        return ContactListMvcApi.getList().then((list) => (this.#list = list));
    }

    create(contact) {
        return ContactListMvcApi.create(contact).then((newContact) => {
            this.#list.push(newContact);

            return newContact;
        });
    }

    update(id, changes) {
        return ContactListMvcApi.update(id, changes).then(() => {
            const contact = this.findById(id);

            Object.keys(changes).forEach(
                (key) => (contact[key] = changes[key])
            );

            return contact;
        });
    }

    delete(id) {
        return ContactListMvcApi.delete(id).then(() => {
            this.#list = this.#list.filter((contact) => contact.id !== id);
        });
    }

    findById(id) {
        return this.#list.find((contact) => contact.id === id);
    }
}
