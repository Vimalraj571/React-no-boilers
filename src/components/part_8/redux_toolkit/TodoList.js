import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../../redux/todoSlice";
import List from "./List";

const TodoList = () => {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    // console.log('todos', todos);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(input)
            dispatch(addTask(input));
    };

    const handleKeyEnter = (e) => {
        if (e.key === "Enter") {
            dispatch(addTask(input));
        }
    };

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyEnter}
                />
                &nbsp;
                <button type="submit">Add</button>
            </form>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "20px"
                }}
            >
                {todos.length ? (
                    todos.map((todo) => <List key={todo.id} {...todo} />)
                ) : (
                    <h3>No todos...</h3>
                )}
            </div>
        </>
    );
};

export default TodoList;
