import ListItem from "./ListItem";

export default function List({ todoList, onDelete, onUpdate }) {
    return (
        <ul>
            {todoList.map((todo) => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}
