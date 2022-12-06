class Collection {
    #list = [];

    fetch() {
        return ContactListMvcApi.getList().then((list) => (this.#list = list));
    }

    create(contact) {
        return ContactListMvcApi.create(contact).then((newContact) => {
            console.log(newContact);
            this.#list.push(newContact);

            return newContact;
        });
    }

    delete(id) {
        return ContactListMvcApi.delete(id).then(() => {
            this.#list = this.#list.filter((contact) => contact.id !== id);
        });
    }
}
