import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    function handleLogin(){
        if(isLogin){
            navigate('/contact');
        }
        else{
            navigate('/login')
        }
    }
    return (
        <>
            <div>
                <br></br>
                <h1 style={{textAlign:"center"}}>Welcome to Home Page</h1>
                <br></br>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzAhPaSwTkqqhs9PJR7TRUz4bbC0A9kr_EMQeDrHMzw&s=10" alt=""
                    style={{
                        height: "300px",
                        display: "block",
                        margin: "auto"
                    }}/>
                <button className='btn btn-primary m-auto mt-4 d-block' onClick={handleLogin} >
                    Contact Us
                </button>
            </div>
        </>
    )
}

export default Home