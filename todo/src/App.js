import React, { useState } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("");
    const [todoList, setTodoList] = useState([
        { title: "asperiores xxxx ", status: false, done: true, id: "2" },
        { title: "eaque ipsa placeat yyy", status: true, done: true, id: "3" },
        { title: "delectus unde aliquam", status: true, done: true, id: "4" },
        { title: "fugit veritatis vel", status: true, done: true, id: "5" },
        { title: "рапрпа", status: false, done: true, id: "9" },
    ]);

    function onSaveBtnClick() {
        const newArr = [
            ...todoList,
            {
                title: message,
                status: false,
                done: false,
                id: String(Math.random()),
            },
        ];

        setTodoList(newArr);
        setMessage("");
    }

    function onMessageChange(e) {
        setMessage(e.target.value);
    }

    return (
        <React.Fragment>
            <input type="text" value={message} onChange={onMessageChange} />
            <button onClick={onSaveBtnClick}>Save</button>

            <ul>
                {todoList.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>;
                })}
            </ul>
        </React.Fragment>
    );
}

export default App;
