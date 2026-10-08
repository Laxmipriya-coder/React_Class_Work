import React, { useState } from 'react'

function Register() {

    const [input, setInput] = useState({ name: '', email: '', pwd: '' });
    const [gender, setGender] = useState('');
    const[toggle,setToggle] = useState('')

    function handleInputs(e) {
        let { name, value } = e.target;
        // console.log(name, value);
        setInput({
            ...input,
            [name]: value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        alert("Form Submited.....")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Registration Form</h2>
                            <form id='form-ele'onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">UserName</label><span className='text-danger'>*</span>
                                    <input type="text" name='name' onChange={handleInputs} className="form-control" placeholder="Enter your User Name" />
                                    {input.name.length > 0 && input.name.length < 6 && (
                                        <p className='text-danger fw-bold'>Username Must be atleast 6 Characters</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label><span className='text-danger'>*</span>
                                    <input type="email" name='email' onChange={handleInputs} className="form-control" placeholder="Enter your Email Id" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label><span className='text-danger'>*</span>
                                    <input type="password" name='pwd' onChange={handleInputs} className="form-control" placeholder="Enter your Password" />
                                    {input.pwd.length > 0 && input.pwd.length < 6 && (
                                        <p className='text-danger fw-bold'>Password Must be atleast 6 Characters</p>
                                    )}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="">Gender : </label>
                                    <input type="radio" name="gender" id="male" value='male'
                                        className='ms-2'
                                        checked={'male' === gender}
                                        onChange={(e) => setGender(e.target.value)} />
                                    <label htmlFor="male" > Male </label>

                                    <input type="radio" name="gender" id="female" value='female'
                                        checked={'female' === gender} className='ms-2' 
                                        onChange={(e) => setGender(e.target.value)} />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="mb-3 text-center">
                                    <input type="checkbox" name="tc" id="tc"
                                    checked={toggle} onChange={(e)=> setToggle(e.target.checked)} />
                                    <label htmlFor="tc">Agree terms and conditions</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <input type="submit" className='btn btn-primary' value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1>Gender : {gender}</h1> */}
            {/* <div className="m-4">
                <h5>Entered Data:</h5>
                <p>Name: {input.name}</p>
                <p>Email: {input.email}</p>
                <p>Password: {input.pwd}</p>
            </div> */}
        </>
    )
}

export default Register