import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <h2>Routing Concept</h2>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/help"}>Help</Link></li>
                    <li><Link to={"/product"}>Product</Link></li>
                </ul>
                <div className="btns">
                    <button><Link to={"/login"}>Login</Link></button>
                    <button><Link to={"/register"}>Register</Link></button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;