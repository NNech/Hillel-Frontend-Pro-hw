import React from "react";
import styles from "./Todo.module.css";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

function Todo() {
    const { todoList, onFormSubmit, deleteTodo, updateTodo, error } = useTodo();

    return (
        <React.Fragment>
            <Form onSubmit={onFormSubmit} />
            {error ? <div className={styles.error}>{error}</div> : null}
            <List
                todoList={todoList}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
            />
        </React.Fragment>
    );
}

export default Todo;
