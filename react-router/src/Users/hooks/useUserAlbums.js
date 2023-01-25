import { useEffect, useState } from "react";
import UserApi from "./UserApi";

export default function useUserAlbums(id) {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        UserApi.getAlbums(id)
            .then((data) => {
                setAlbums(data);
            })
            .catch((e) => setError(e.message));
    }, [id]);

    return albums;
}
