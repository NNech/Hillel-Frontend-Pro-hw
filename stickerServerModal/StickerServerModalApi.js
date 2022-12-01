class StickerServerModalApi {
    static URL = "https://62054479161670001741b708.mockapi.io/api/stickers";

    static request(url = "", method = "GET", body) {
        return fetch(StickerServerModalApi.URL + url, {
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

    static getStickers() {
        return StickerServerModalApi.request("").catch((error) => {
            throw new Error("Can not get stickers!");
        });
    }

    static create(body) {
        return StickerServerModalApi.request("", "POST", body).catch(
            (error) => {
                throw new Error("Can not create sticker on server!");
            }
        );
    }

    static delete(id) {
        return StickerServerModalApi.request("/" + id, "DELETE").catch(
            (error) => {
                throw new Error("Can not delete sticker on server!");
            }
        );
    }

    static update(id, changes) {
        return StickerServerModalApi.request("/" + id, "PUT", changes).catch(
            (error) => {
                throw new Error("Can not update sticker on server!");
            }
        );
    }
}
