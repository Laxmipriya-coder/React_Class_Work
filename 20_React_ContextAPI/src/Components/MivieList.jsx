import React from 'react'

function MivieList({movie}) {
  return (
    <>
    <div className="col-3 mb-3">
        <div className="card">
            <h5>{movie.movieName}</h5>
            <h6>{movie.actor}</h6>
            <h6>{movie.actress}</h6>
            <p>{movie.year}</p>
        </div>
    </div>
    </>
  )
}

export default MivieList