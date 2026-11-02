import React, { useContext } from 'react'
import MovieContext from './Contexts/MovieContext'
import MivieList from './MivieList';

function Movies() {
  let movies = useContext(MovieContext);

  return (
    <>
    <h4>Movies Data Here</h4>
    <div className="row mt-4">
      {
        movies.map(movie => <MivieList movie={movie} key={movie.id}/>)
        
      }
    </div>
    </>
  )
}

export default Movies