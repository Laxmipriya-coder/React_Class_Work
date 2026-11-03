import React from 'react'

function Child({ count }) {
    console.log('Child re-render.......');
    return (
        <>
            <section className="card mt-5 m-auto" style={{ maxWidth: "320px" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h3>Child Component</h3>
                    <p>Count data from parent : {count}</p>
                </div>
            </section >
        </>
    )
}

export default React.memo(Child);