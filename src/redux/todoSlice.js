import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            { id: 1, label: "TypeScript" },
            { id: 2, label: "React" },
            { id: 3, label: "Redux-toolkit" }
        ],
    },
    reducers: {
        addTask: (state, action) => {
            console.log('addTask state', current(state));
            const todo = {
                id: state.todos.length + 1,
                label: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            // OR
            // const idxTask = state.todos.findIndex(
            //     (task) => task.id === action.payload
            // );
            // state.todos.splice(idxTask, 1);
        }
    }
});

export const {
    addTask,
    deleteTask,
} = todoSlice.actions;

export default todoSlice.reducer;
