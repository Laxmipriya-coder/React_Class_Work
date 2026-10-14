
import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products Data</h1>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-secondary">
                  {product.description}
                </p>
                <h5 className="text-success">${product.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
