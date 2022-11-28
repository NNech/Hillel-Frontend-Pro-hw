class ContactListJquaryApi {
    static URL = "https://6367baa6edc85dbc84da6382.mockapi.io/api/contact";

    static request(url = "", method = "GET", body) {
        return fetch(ContactListJquaryApi.URL + url, {
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
        return ContactListJquaryApi.request("").catch((error) => {
            throw new Error("Cannot get contact list from server!");
        });
    }

    static create(body) {
        return ContactListJquaryApi.request("", "POST", body).catch((error) => {
            throw new Error("Cannot create contact on server!");
        });
    }

    static delete(id) {
        return ContactListJquaryApi.request("/" + id, "DELETE").catch(
            (error) => {
                throw new Error("Cannot delete contact on server!");
            }
        );
    }
}
