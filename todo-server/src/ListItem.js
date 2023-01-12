import styles from "./ListItem.module.css";

export default function ListItem({ todo, onDelete, onUpdate }) {
    const done = todo.done ? styles.done : "";
    return (
        <li
            className={done}
            onClick={() => onUpdate(todo.id, { done: !todo.done })}
        >
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}
