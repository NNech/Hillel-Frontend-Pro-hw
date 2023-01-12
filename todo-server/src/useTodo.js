import { useState, useEffect } from "react";
import TodoApi from "./TodoApi";

export default function useTodo() {
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        TodoApi.getList()
            .then((list) => {
                setTodoList(list);
            })
            .catch((e) => setError(e.message));
    }, []);

    function onFormSubmit(todo) {
        TodoApi.create(todo)
            .then((newTodo) => setTodoList([...todoList, newTodo]))
            .catch((e) => setError(e.message));
    }

    function updateTodo(id, changes) {
        TodoApi.update(id, changes)
            .then((list) => {
                setTodoList(list);
            })
            .catch((e) => setError(e.message));
    }

    function deleteTodo(id) {
        TodoApi.delete(id)
            .then(() => {
                const list = todoList.filter((todo) => todo.id !== id);
                setTodoList(list);
            })
            .catch((e) => setError(e.message));
    }
    return {
        todoList,
        onFormSubmit,
        deleteTodo,
        updateTodo,
        error,
    };
}
