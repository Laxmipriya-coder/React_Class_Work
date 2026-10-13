import { useState } from "react"

function Dashboard(){
    const[isLogin,setInLogin] = useState(false);
    function handleSubmit(){
        setInLogin(!isLogin)
    }
    return(
        <>
        <h1 className="text-danger">Dashboard Page</h1>
        <button className="btn btn-outline-primary mb-2" onClick={handleSubmit} > {isLogin ?'Logout' :  'Login'}</button>
        {
            // isLogin ? <h2>Welcome to HomePage</h2> : <h4>Please Login........</h4>
            isLogin && <h2>Welcome User............</h2>
        }
        </>
    )
}
export default Dashboard