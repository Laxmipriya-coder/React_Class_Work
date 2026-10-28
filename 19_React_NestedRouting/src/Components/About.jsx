
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXjVobkAEkDxDLPAJZl6Ol4ELHtJ6yRcvt27eGOETaw&s=10"
                        alt="Our office"
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-md-6 mt-4 mt-md-0">
                    <h2>Welcome to Our Website</h2>
                    <p>
                        We are passionate about creating simple,
                        creative, and user-friendly web experiences.
                    </p>
                    <p>
                        Our goal is to provide quality services
                        and make technology easy for everyone.
                    </p>
                    <button className='btn btn-success'>
                        <Link to='dashboard' style={{ textDecoration: "none", color: "white" }}>
                            Go to DashBoard
                        </Link>
                    </button>
                    <button className='btn btn-primary ms-4'>
                        <Link to='profile' style={{ textDecoration: "none", color: "white" }}>
                            Go to Profile
                        </Link>
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default About;
