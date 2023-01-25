import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserAlbums from "./pages/UserAlbums";
import UserPhotos from "./pages/UserPhotos";

export default function Users() {
    return (
        <Routes>
            <Route path="" element={<UserList />} />
            <Route path=":id" element={<UserAlbums />} />
            <Route path=":id/:photosId" element={<UserPhotos />} />
        </Routes>
    );
}
