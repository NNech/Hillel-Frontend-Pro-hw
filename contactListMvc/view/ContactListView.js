class ContactListView {
    static CREATE_CONTACT_CONTAINER = "#tableForCreatedContacts";
    static BTN_DELETE_CONTACT = "deleteBtn";
    static NEW_CONTACT_TEMPLATE_SELECTOR = ".newContactTemplate";

    #$contact;
    #$tableForCreatedContacts;

    constructor(options) {
        this.options = options;
        this.#$contact = this.init();
        this.#$tableForCreatedContacts = this.#$contact.find(
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
			</table>`).on("click", "." + ContactListView.BTN_DELETE_CONTACT, (e) =>
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

    appendTo($wrapEl) {
        $wrapEl.append(this.#$contact);
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
        const $contact = this.generateContactHTML(contact);

        this.#$tableForCreatedContacts.append($contact);
    }

    generateContactHTML(contact) {
        return `<tr class ="newContactTemplate" data-id=${contact.id}>
				<td>${contact.name}</td>
					<td>${contact.surname}</td>
					<td>${contact.phone}</td>
					<td>
						<button class="deleteBtn">Delete</button>
					</td>
            </tr>`;
    }
}
