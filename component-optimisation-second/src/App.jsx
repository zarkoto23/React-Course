import { useState } from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Component Optimisation - ToDo List</h1>
      <TodoList />
      <Counter count={count} setCount={setCount}/>
    </>
  );
}

export default App;
