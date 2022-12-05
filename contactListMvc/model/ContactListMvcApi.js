class ContactListMvcApi {
    static URL = "https://6367baa6edc85dbc84da6382.mockapi.io/api/contact";

    static request(url = "", method = "GET", body) {
        return fetch(ContactListMvcApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Cannot execute request method", {
                cause: response,
            });
        });
    }

    static getList() {
        return ContactListMvcApi.request("").catch((error) => {
            throw new Error("Cannot get contact list from server!");
        });
    }

    static create(body) {
        return ContactListMvcApi.request("", "POST", body).catch((error) => {
            throw new Error("Cannot create contact on server!");
        });
    }

    static update(id, changes) {
        return ContactApi.request(id, "PUT", changes).catch((error) => {
            throw new Error("Can not update contact on server!");
        });
    }

    static delete(id) {
        return ContactListMvcApi.request("/" + id, "DELETE").catch((error) => {
            throw new Error("Cannot delete contact on server!");
        });
    }
}
