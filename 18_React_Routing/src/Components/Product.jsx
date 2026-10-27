import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
    let list = [
        { id: 1, title: "Laptop" },
        { id: 2, title: "Mouse" },
        { id: 3, title: "Watch" },
        { id: 4, title: "Mobile" }
    ]
    
    return (
        <>
            <h1>Product Page</h1>
            {
                list.map(ele => <Link
                    key={ele.id}
                    style={{ textDecoration: "none",color:"black" }}
                    to={`productdetails/${ele.id}`}>
                    <h4>{ele.title}</h4>
                </Link>
                )
            }
            <Outlet />
        </>
    )
}

export default Product