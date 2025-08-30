
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{

    fetch('http://localhost:3030/jsonstore/todos')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err.message))

  })








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
        {/*<div className="loading-container">
          <div className="loading-spinner">
            <span className="loading-spinner-text">Loading</span>
          </div>
        </div> */}




        <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>




            <tr className="todo is-completed">
              <td>Give dog a bath</td>
              <td>Complete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>


        




            <tr className="todo">
              <td>Vacuum floor</td>
              <td>Incomplete</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>



      
          
          </tbody>
        </table>
      </div>
    </section>
  </main>


  <footer className="footer">
    <p>Copyright © designed by Mihail Valkov</p>
  </footer>
</>

      
  )
}

export default App
