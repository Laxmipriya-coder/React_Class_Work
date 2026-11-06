import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-dark shadow" style={{ backgroundColor: '#000080' }}>
            <div className="container-fluid px-4">
                <h4 className="navbar-brand fw-bold" style={{fontFamily:"Times New Roman"}}>
                    Product Management
                </h4>
            </div>
        </nav>
    );
}

export default Navbar;