import { useState } from "react";
import TodoItem from "./todoItem";

const initTodos = [
  { id: 1, text: "Do homework", isCompleted: false },
  { id: 2, text: "do meal", isCompleted: false },
  { id: 3, text: "fitness", isCompleted: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initTodos);

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </ul>
    </>
  );
}
