
function ProductCard({ product }) {

    return (
        <div className="col-md-4 col-lg-3 mb-4">

            <div className="card h-100 shadow-sm product-card">

                <img
                    src={product.thumbnail}
                    className="card-img-top product-image"
                    alt={product.title}
                />

                <div className="card-body">

                    <span className="badge bg-primary mb-2">
                        {product.category}
                    </span>

                    <h5 className="card-title">
                        {product.title}
                    </h5>

                    <p className="text-muted small">
                        {product.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">

                        <h5 className="text-success mb-0">
                            ${product.price}
                        </h5>

                        <span className="badge bg-warning text-dark">
                            ⭐ {product.rating}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;