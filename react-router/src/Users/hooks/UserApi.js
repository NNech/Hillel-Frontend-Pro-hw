export default class UserApi {
    static USERS_LINKS_API_URL = "https://jsonplaceholder.typicode.com/users";
    static ALBUM_LINKS_API_URL =
        "https://jsonplaceholder.typicode.com/albums?userId=";

    static FOTOS_API_URL =
        "https://jsonplaceholder.typicode.com/photos?albumId=";

    static getList() {
        return fetch(UserApi.USERS_LINKS_API_URL).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Can not get list of users!");
        });
    }

    static getAlbums(id) {
        return fetch(UserApi.ALBUM_LINKS_API_URL + id).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Can not get albums!");
        });
    }

    static getPhotos(id) {
        return fetch(UserApi.FOTOS_API_URL + id).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Can not get album photos!");
        });
    }
}
