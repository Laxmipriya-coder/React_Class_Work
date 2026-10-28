
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Product() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function fetchProducts() {
        let prod = await fetch("https://dummyjson.com/products");
        let data = await prod.json();

        setProducts(data.products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Product List</h2>
                <div className="row">
                    {products.map((item) => {
                        return (
                            <div className="col-md-3 mb-4" key={item.id}>
                                <div className="card h-100 shadow-sm">
                                    <img src={item.thumbnail} className="card-img-top" alt={item.title}
                                        style={{ height: "200px", objectFit: "contain" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <h5 className="text-success">${item.price}</h5>
                                        <button
                                            className="btn btn-primary"
                                            to="/productdetails"
                                            onClick={() => navigate(`/productdetails/${item.id}`)}
                                        >
                                            View Product
                                        </button>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Product;
