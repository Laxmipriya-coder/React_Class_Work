import React from "react";

function Navbar() {
    return (
        <nav className="navbar py-3 shadow"
            style={{ backgroundColor: "#172554" }}>
            <div className="container-fluid px-4">

                {/* Logo */}
                <a
                    className="navbar-brand fw-bold fs-3 text-white"
                    href="/"
                >
                    E-Cart <span>🛒</span>
                </a>

                {/* Navbar Buttons */}
                <div className="d-flex align-items-center gap-3">

                    <button
                        className="btn btn-light px-3"
                        type="button"
                    >
                        ❤️ Wishlist
                    </button>

                    <button
                        className="btn btn-warning px-3 fw-semibold"
                        type="button"
                    >
                        🛒 Add to Cart
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;