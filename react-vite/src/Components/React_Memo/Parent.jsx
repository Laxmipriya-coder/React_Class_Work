import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    console.log('Parent re-render......');
    return (
        <>
            <section className="card mt-5 m-auto" style={{ maxWidth: "320px" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h1>Parent Component</h1>
                    <h4>Number : {number}</h4>
                    <button className='btn btn-primary' onClick={() => setNumber(number + 1)}>Increment Number</button>
                    <br />
                    <br />
                    <h4>Count : {count}</h4>
                    <button className='btn btn-success' onClick={() => setCount(count + 1)}>Increment Count</button>
                </div>
            </section>
            <Child count={count} />
        </>
    )
}

export default Parent