import React from 'react'

function Ecart() {
    let products = [
        {
            id: 1,
            name: "Samsung Galaxy 24 Ultra",
            price: "₹1,19,999",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgjTSfm_AB0OMoJnoN4JnTmQw8h8LwUGB6qBWOPy169DZdK0xJ6zgFGPgFdtDn3PGTxM9IZHPyY1b8IOftPlerlYF9qA2LMdj6JNUuBfffN3V5YlsG_9i8dan7ry74m5X6-nHdzQ&usqp=CAc"
        },
        {
            id: 2,
            name: "Apple Iphone 18 Pro",
            price: "₹1,64,900",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjy-IpjNwszCLpcukfpsdi1mT5Dt2ukOU9s2K0g2SvJt214NmYsZafKA9vQoGB10bqPMiUXOi-gcY72tYuBujYD3YTx5ulAkXcriEht-IGWW7AjmPnaK4g-1DPzyYE1CxON53tGxg&usqp=CAc"
        },
        {
            id: 3,
            name: "Google Pixel 11",
            price: "₹89,999",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQPbDPEWHuDuawK7mc7kGvHqgGwMrApY2ozjUj3Kd__sHKqx5Rti8g0Awnqcib-PIuyTnNE2fVqlcEkXNz2GM7rsSRScIWHeXVfXuocZkH3jz1Jc5tqeK6LXR19mTPd5QNDYZn1Ivs&usqp=CAc"
        },
        {
            id: 4,
            name: "Apple Mac Book",
            price: "₹1,60,444",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimcJoptRgAUWnxEF-87_v_ScyZwE74M1_OwhNQTcLTw&s=10"
        },
        {
            id: 5,
            name: "Lenovo IdeaPad Pro 5",
            price: "₹1,95,395",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTV81ZUAHi8U6t0LLclnYK7iMyMaOV0rzQt59ty7SQ2c6q0K-gqADQOkZew1s5lmU0l79tlsqA_nGjUcaOVFVUhddYKAAmZ7iBOvHX8i755O6bpR_Cu4cBN4g9wL5hbgXRVSZ4jmA&usqp=CAc"
        }
    ];

    return (
        <div className="container py-4">
            <h2 className="text-center fw-bold mb-4">Our Products</h2>

            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-lg-4 col-xl" key={product.id}>
                        <section className="card h-100 shadow-sm border-0">

                            <img
                                src={product.image}
                                className="card-img-top p-3"
                                alt={product.name}
                                style={{
                                    height: "200px",
                                    objectFit: "contain"
                                }}
                            />

                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title fw-bold">
                                    {product.name}
                                </h5>

                                <p className="text-dark fw-bold fs-5">
                                    {product.price}
                                </p>

                                <div className="mt-auto d-flex flex-column gap-2">
                                    <button className="btn btn-warning">
                                        🛒 Add to Cart
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        ❤️ Wishlist
                                    </button>
                                </div>
                            </div>

                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ecart;