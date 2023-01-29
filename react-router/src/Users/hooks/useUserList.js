import { useEffect, useState } from "react";
import UserApi from "./UserApi";

export default function useUserList() {
    const [userList, setList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        UserApi.getList()
            .then((list) => {
                setList(list);
            })
            .catch((e) => setError(e.message));
    }, []);

    return userList;
}
