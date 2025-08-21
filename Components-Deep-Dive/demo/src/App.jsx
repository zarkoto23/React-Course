import { useState } from 'react'
import './App.css'

function App() {

  const [movies, setMovies]=useState([
    'The Matrix',
    'Man of Steel',
    'The Case of Christ',
    'Lord of the Rings',
    'Spiderman'
  ])

  const removeFirstHandler=()=>{
    movies.shift()

    //! when update reference type, we need new reference for updating correctly
    setMovies([...movies])
    
  }



  return (
    <>
    <h2>Movie list</h2>
    <ul>
      {movies.map(movie=><li key={movie}>{movie}</li>)}
    </ul>

    <button onClick={removeFirstHandler}>remove first</button>
    </>
  )
}

export default App
