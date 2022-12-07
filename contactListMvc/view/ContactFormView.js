class ContactFormView extends FormView {
    init() {
        return $(`
       <tr id="inputNewContact">
                <td class="tdItem">
                    <input type="text" class="inputField" id="inputName" />
                </td>
                <td class="tdItem">
                    <input type="text" class="inputField" id="inputSurname" />
                </td>
                <td class="tdItem">
                    <input type="text" class="inputField" id="inputPhone" />
                </td>
                <td class="btnItem">
                    <button id="addContact">Add contact</button>
                </td>
            </tr>
   `).on("click", FormView.BTN_ADD_CONTACT, (e) =>
            this.onButtonAddContactClick(e)
        );
    }
}
