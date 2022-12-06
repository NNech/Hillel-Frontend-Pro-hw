class ContactListView extends View {
    static CREATE_CONTACT_CONTAINER = "#tableForCreatedContacts";
    static BTN_DELETE_CONTACT = ".deleteBtn";
    static NEW_CONTACT_TEMPLATE_SELECTOR = ".newContactTemplate";

    #$tableForCreatedContacts;

    constructor(options) {
        super();
        this.options = options;
        this.$container = this.init();
        this.#$tableForCreatedContacts = this.$container.find(
            ContactListView.CREATE_CONTACT_CONTAINER
        );
    }

    init() {
        return $(`<table id="contactList">
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>

            <tbody id="tableForCreatedContacts"></tbody>
			</table>`).on("click", ContactListView.BTN_DELETE_CONTACT, (e) =>
            this.onBtnDeleteContactClick(e)
        );
    }

    onBtnDeleteContactClick(e) {
        const contact = e.target.closest(
            ContactListView.NEW_CONTACT_TEMPLATE_SELECTOR
        );

        let id = contact.dataset.id;

        this.options.onDelete(id);
    }

    removeContact(id) {
        const $contact = this.#$tableForCreatedContacts.find(
            `[data-id="${id}"]`
        );
        $contact.remove();
    }

    renderContactList(contactList) {
        this.#$tableForCreatedContacts.html(
            contactList.map(this.generateContactHTML)
        );
    }

    renderContact(contact) {
        const newContact = this.generateContactHTML(contact);
        this.#$tableForCreatedContacts.append(newContact);
    }

    generateContactHTML(contact) {
        return `<tr class ="newContactTemplate" data-id="${contact.id}">
				<td>${contact.name}</td>
					<td>${contact.surname}</td>
					<td>${contact.phone}</td>
					<td>
						<button class="deleteBtn">Delete</button>
					</td>
""            </tr>`;
    }
}
