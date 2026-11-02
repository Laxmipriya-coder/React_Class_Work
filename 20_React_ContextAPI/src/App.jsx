import { useState } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import MovieContext from "./Components/Contexts/MovieContext"
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {
      movieName: "Inception",
      actor: "Leonardo DiCaprio",
      actress: "Marion Cotillard",
      year: 2010
    },
    {
      movieName: "La La Land",
      actor: "Ryan Gosling",
      actress: "Emma Stone",
      year: 2016
    },
    {
      movieName: "Interstellar",
      actor: "Matthew McConaughey",
      actress: "Anne Hathaway",
      year: 2014
    },
    {
      movieName: "The Matrix",
      actor: "Keanu Reeves",
      actress: "Carrie-Anne Moss",
      year: 1999
    },
    {
      movieName: "Titanic",
      actor: "Leonardo DiCaprio",
      actress: "Kate Winslet",
      year: 1997
    },
    {
      movieName: "A Star Is Born",
      actor: "Bradley Cooper",
      actress: "Lady Gaga",
      year: 2018
    }
  ])
  return (
    <>
      <Navbar />
      <MovieContext.Provider value={movies}>
        <Home/>
      </MovieContext.Provider>
    </>
  )
}
export default App