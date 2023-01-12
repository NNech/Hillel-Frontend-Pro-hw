import * as React from "react";

export default function Name({ name, onNameChange }) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    );
}
