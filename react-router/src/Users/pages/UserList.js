import React from "react";
import useUserList from "../hooks/useUserList";
import List from "../components/List";

export default function UserList() {
    const list = useUserList();
    return (
        <div>
            <List list={list} />
        </div>
    );
}
