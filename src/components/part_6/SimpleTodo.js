import { useState } from "react";

import Notification from "./Notification";

const todoList = [
  {
    id: 1,
    body: "need to do 1",
  },
  {
    id: 2,
    body: "need to do 2",
  },
];

const AddTodo = ({ todos, setListOfTodo, message, setMessage }) => {
  const [todoTemp, setTodoTemp] = useState("");
  const onClickSubmitTodo = (e) => {
    e.preventDefault();
    setListOfTodo([...todos, { id: todos.length + 1, body: todoTemp }]);
    setMessage(`Added the Todo ${todoTemp}`);
  };
  
  return (
    <div>
      <form onSubmit={onClickSubmitTodo}>
        <Notification message={message} setMessage={setMessage} />
        <h1>Add Todo</h1>
        <label>Add Todo</label>
        <input
          type="text"
          onChange={(e) => setTodoTemp(e.target.value)}
          value={todoTemp}
        />
        <button type="submit">Submit</button>
        <ListTodo todos={todos} />
      </form>
    </div>
  );
};

const ListTodo = ({ todos }) => {
  console.log("todos");
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.body}</li>
      ))}
    </div>
  );
};

const SimpleTodoRootSix = (props) => {
  const [listOfTodo, setListOfTodo] = useState(todoList);
  return (
    <>
      <AddTodo todos={listOfTodo} setListOfTodo={setListOfTodo} {...props} />
    </>
  );
};

export default SimpleTodoRootSix;
