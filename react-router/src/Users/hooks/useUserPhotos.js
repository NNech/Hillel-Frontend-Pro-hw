import { useEffect, useState } from "react";
import UserApi from "./UserApi";

export default function useUserPhotos(id) {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        UserApi.getPhotos(id)
            .then((data) => setPhotos(data))
            .catch((e) => setError(e.message));
    }, [id]);

    return photos;
}
