import React, { useState } from 'react'

function Form() {
    const [inputuser, setInputuser] = useState('');
    const[inputemail,setInputemail] = useState('');
    const[inputpass,setInputpass] = useState('');
    function handleuserInput(e) {
        console.log(e.target.value)
        setInputuser(e.target.value)
    }

    function handleemailInput(e){
        console.log(e.target.value);
        setInputemail(e.target.value);
    }
    function handlepassInput(e){
        setInputpass(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Registration Form</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="usn" className="form-label">UserName</label>
                                    <input type="text" value={inputuser} onChange={handleuserInput} id="usn" className="form-control" placeholder="Enter your User Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" value = {inputemail} onChange = {handleemailInput} id="email" className="form-control" placeholder="Enter your Email Id" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" value={inputpass} onChange={handlepassInput} id="password" className="form-control" placeholder="Enter your Password" />
                                </div>
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form