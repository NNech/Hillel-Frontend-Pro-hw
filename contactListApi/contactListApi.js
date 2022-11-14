class contactListApi {
    static API_URL = "https://6367baa6edc85dbc84da6382.mockapi.io/api/contact";

    static getList() {
        return fetch(contactListApi.API_URL).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Can not get Contact list from mockapi");
            }
        });
    }

    static create(contact) {
        return fetch(contactListApi.API_URL, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Can not create Contact list from mockapi");
            }
        });
    }

    static delete(id) {
        return fetch(contactListApi.API_URL + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "applsication/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Can not delete Contact list from mockapi");
            }
        });
    }
}
