class StudentApi {
    static URL = "https://6367baa6edc85dbc84da6382.mockapi.io/api/student";

    static request(url = "", method = "GET", body) {
        return fetch(StudentApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Canot execute request method!", {
                cause: response,
            });
        });
    }

    static getStudents() {
        return StudentApi.request("").catch((error) => {
            throw new Error("Can not get students!");
        });
    }

    static create(body) {
        return StudentApi.request("", "POST", body).catch((error) => {
            throw new Error("Can not create student on server!");
        });
    }

    static delete(id) {
        return StudentApi.request("/" + id, "DELETE").catch((error) => {
            throw new Error("Can not delete student on server!");
        });
    }

    static update(id, changes) {
        return StudentApi.request("/" + id, "PUT", changes).catch((error) => {
            throw new Error("Can not update student on server!");
        });
    }
}
