import React, { useContext } from 'react'
import MovieContext from './Contexts/MovieContext'

function Navbar() {
    const data = useContext(MovieContext);
    console.log(data);
    return (
        <>
            <nav className="navbar bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand">Context API</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar