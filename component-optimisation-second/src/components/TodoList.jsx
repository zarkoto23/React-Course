import {useState } from "react";
import TodoItem from "./TodoItem";

const initTodos = [
  { id: 1, text: "Do homework", isCompleted: false },
  { id: 2, text: "do meal", isCompleted: false },
  { id: 3, text: "fitness", isCompleted: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initTodos);

  const toogleTodoHandler = (todoId) => {
    setTodos((state) =>
      state.map((todo) =>
        todoId === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  // const calculateMeaningOfLife = () => {
  //   function pauseComp(ms) {
  //     var curr = new Date().getTime();
  //     ms += curr;
  //     while (curr < ms) {
  //       curr = new Date().getTime();
  //     }
  //   }

  //   pauseComp(1000);

  //   return 42;
  // }

  // const meaningOfLife=calculateMeaningOfLife()
  
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} onToggle={toogleTodoHandler} key={todo.id} />
        ))}
      </ul>
      {/* {meaningOfLife} */}


    </>
  );
}

