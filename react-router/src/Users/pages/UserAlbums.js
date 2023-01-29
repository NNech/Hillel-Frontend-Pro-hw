import React from "react";
import { useParams } from "react-router-dom";
import Albums from "../components/Albums";
import NavBtn from "../components/NavBtn";

import useUserAlbums from "../hooks/useUserAlbums";

export default function UserAlbums() {
    const { id } = useParams();
    const albums = useUserAlbums(id);

    return (
        <div>
            <NavBtn />
            <Albums albums={albums} />
        </div>
    );
}
