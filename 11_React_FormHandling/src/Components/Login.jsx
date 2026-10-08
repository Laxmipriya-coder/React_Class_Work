import React, { useState } from 'react'

function Login() {

    const [input, setInput] = useState({ name: '', email: '', pwd: '' });

    function handleInputs(e) {
        let { name, value } = e.target;
        // console.log(name, value);
        setInput({
            ...input,
            [name]: value
        })
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
                                    <input type="text" name='usn' onChange={handleInputs} className="form-control" placeholder="Enter your User Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name='email' onChange={handleInputs} className="form-control" placeholder="Enter your Email Id" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name='pwd' onChange={handleInputs} className="form-control" placeholder="Enter your Password" />
                                </div>
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <h5>Entered Data:</h5>
                <p>Name: {input.usn}</p>
                <p>Email: {input.email}</p>
                <p>Password: {input.pwd}</p>
            </div>
        </>
    )
}

export default Login