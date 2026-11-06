
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductFilters from "./Components/ProductFilter";
import ProductList from "./Components/ProductList";
import './App.css'


function App() {


    // 1. Store API products
    const [products, setProducts] = useState([]);

    // 2. Loading state
    const [loading, setLoading] = useState(true);

    // 3. Error state
    const [error, setError] = useState("");

    // 4. Search state
    const [search, setSearch] = useState("");

    // 5. Category state
    const [category, setCategory] = useState("all");


    // 6. Fetch products from API
    const fetchProducts = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await axios.get(
                "https://dummyjson.com/products?limit=0"
            );

            setProducts(response.data.products);

        } catch (err) {

            setError("Unable to fetch products. Please try again.");

        } finally {

            setLoading(false);

        }
    };


    // 7. Execute API call when component loads
    useEffect(() => {

        fetchProducts();

    }, []);


    // 8. Extract unique categories
    const categories = [
        ...new Set(
            products.map((product) => product.category)
        )
    ];


    // 9. Search and filter products
    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });


    // 10. UI
    return (

        <>
            <Navbar/>

            <div className="container py-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Product Dashboard
                    </h2>

                    <p className="text-muted">
                        Explore and manage your product collection.
                    </p>

                </div>


                <ProductFilters

                    search={search}
                    setSearch={setSearch}

                    category={category}
                    setCategory={setCategory}

                    categories={categories}

                    totalProducts={products.length}
                    filteredCount={filteredProducts.length}

                />


                {/* Loading UI */}

                {loading && (

                    <div className="text-center my-5">

                        <div className="spinner-border text-primary"></div>

                        <p className="mt-2">
                            Loading products...
                        </p>

                    </div>

                )}


                {/* Error UI */}

                {!loading && error && (

                    <div className="alert alert-danger">
                        {error}

                        <button
                            className="btn btn-sm btn-danger ms-3"
                            onClick={fetchProducts}
                        >
                            Retry
                        </button>

                    </div>

                )}


                {/* Product Display */}

                {!loading && !error && (

                    filteredProducts.length > 0 ? (

                        <ProductList
                            products={filteredProducts}
                        />

                    ) : (

                        <div className="alert alert-warning text-center">
                            No products found!
                        </div>

                    )

                )}

            </div>

        </>

    );
}

export default App;