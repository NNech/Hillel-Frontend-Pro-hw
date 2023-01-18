export default class TodoApi {
    static URL = "https://62054479161670001741b708.mockapi.io/api/todo";

    static getList() {
        return fetch(TodoApi.URL).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can not retrieve Todo list from server");
        });
    }

    static create(todo) {
        return fetch(TodoApi.URL, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can not create Todo on server");
        });
    }

    static update(updates) {
        return fetch(`${TodoApi.URL}/${updates.id}`, {
            method: "PUT",
            body: JSON.stringify(updates),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can not update Todo on server");
        });
    }

    static delete(id) {
        return fetch(`${TodoApi.URL}/${id}`, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can not delete Todo on server");
        });
    }
}
