import { ACTION_TODO_ADD } from "../actions/todo";

const INITIAL_STATE = {
    todoList: [
        { title: "asperiores xxxx ", status: false, done: true, id: "2" },
        { title: "eaque ipsa placeat yyy", status: true, done: true, id: "3" },
        { title: "delectus unde aliquam", status: true, done: true, id: "4" },
        { title: "fugit veritatis vel", status: true, done: true, id: "5" },
        { title: "рапрпа", status: false, done: true, id: "9" },
    ],
};
export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_TODO_ADD:
            return { ...state, todoList: [...state.todoList, payload] };
        default:
            return state;
    }
}
