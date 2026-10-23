
import React, { useState } from 'react'

function ButtonChange() {
    const [color, setColor] = useState("white");

    return (
        <>
            <section className="card m-auto mt-4" style={{ maxWidth: "320px" }}>
                <h1 style={{ textAlign: "center", backgroundColor: color }}> Change Background</h1>
                <div className="card-body"> 
                    <button className="btn btn-outline-danger ms-2" onClick={() => setColor("red")}> Red </button>
                    <button className="btn btn-outline-success ms-2" onClick={() => setColor("green")}>Green </button>
                    <button className="btn btn-outline-warning ms-2" onClick={() => setColor("yellow")}> Yellow </button>
                    <button className="btn btn-outline-primary ms-2" onClick={() => setColor("blue")}>Blue</button>
                </div>
            </section>
        </>
    )
}

export default ButtonChange;
