import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function reset() {
        setCount(0)
    }
    return (
        <>
            <section className="container mt-5">
                <div className="card shadow mx-auto" style={{ width: "20rem" }}>
                    <div className="card-body text-center">
                        <h4 className="card-title mb-4">Counter Application</h4>
                        <h3>Count Value : {count}</h3>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" onClick={increment}>Increment</button>
                            <button className="btn btn-warning ms-3" onClick={decrement}>Decrement</button>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-danger" onClick={reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;