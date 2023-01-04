import React, { useState } from "react";

export default function Form({ onSubmit }) {
    const [message, setMessage] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();

        const newTodo = {
            title: message,
            done: false,
        };

        onSubmit(newTodo);
        setMessage("");
    }

    function onMessageChange(e) {
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" value={message} onChange={onMessageChange} />
        </form>
    );
}
