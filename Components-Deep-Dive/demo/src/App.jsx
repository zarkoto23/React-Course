import { useState } from 'react'
import './App.css'
import MovieListItem from './components/MovieListItem'

function App() {

  const [movies, setMovies]=useState([
    {id:1,title:'The Matrix'},
    {id:2,title:'Man of Steel'},
    {id:3,title:'The Case of Christ'},
    {id:4,title:'Lord of the Rings'},
    {id:5,title:'Spiderman'},
    {id:6,title:'The Matrix'}
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
      {movies.map((movie)=><MovieListItem key={movie.id} movie={movie}/>)}
    </ul>
 

    <button onClick={removeFirstHandler}>remove first</button>
    </>
  )
}

export default App
