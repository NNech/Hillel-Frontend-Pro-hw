export const ACTION_TODO_ADD = "ACTION_TODO_ADD";

export function addTodo(payload) {
    return { type: ACTION_TODO_ADD, payload };
}
