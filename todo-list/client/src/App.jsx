import { useEffect, useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending]=useState(true)

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
        setIsPending(false)
      })
      .catch((err) => console.log(err.message));
  }, []);

  function toggleStatus(id) {

      const todoToUpdate = todos.find(todo => todo._id === id);
  if (!todoToUpdate) return;

    setTodos((state) =>
      state.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );



  const updatedTodo = { ...todoToUpdate, isCompleted: !todoToUpdate.isCompleted };

    fetch(`http://localhost:3030/jsonstore/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTodo) // PUT изисква целия обект
  }).catch(err=>console.log(err.message));
  
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="stylesheet" href="./static/styles.css" /> */}
      <title>Todo List</title>

      <header className="navigation-header">
        <span className="navigation-logo">
          <img src="/todo-icon.png" alt="todo-logo" />
        </span>
        <span className="spacer" />
        <span className="navigation-description">Todo List</span>
      </header>

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>
          <div className="table-wrapper">
           
           {isPending && 
            <div className="loading-container">
          <div className="loading-spinner">
            <span className="loading-spinner-text">Loading</span>
          </div>
        </div>}

            <table className="table">
              <thead>
                <tr>
                  <th className="table-header-task">Task</th>
                  <th className="table-header-status">Status</th>
                  <th className="table-header-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <Item key={todo._id} todo={todo} onToggle={toggleStatus} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright © designed by Mihail Valkov</p>
      </footer>
    </>
  );
}

export default App;
