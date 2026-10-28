
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function fetchProduct() {

      let response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      let data = await response.json();

      setProduct(data);
    }

    fetchProduct();

  }, [id]);

  if (!product) {
    return <h2>Loading Product...</h2>;
  }

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <div className="row">

          <div className="col-md-5">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                height: "300px",
                objectFit: "contain"
              }}
            />

          </div>

          <div className="col-md-7">

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <h3 className="text-success">
              ${product.price}
            </h3>

            <p>
              Category: {product.category}
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => navigate('/product')}
            >
              Go Back
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
