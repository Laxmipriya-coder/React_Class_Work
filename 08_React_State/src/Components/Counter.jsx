import { useState } from "react";

function Counter() {
    const[count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    return (
        <>
            <div className="card col-3 mx-auto mt-4 p-4 shadow">
                <div className="d-grid gap-3 mx-auto mt-4">
                    <h1>Counter App</h1>
                    <h3> Count Value : {count}</h3>
                    <button className="btn btn-success" onClick={handleIncrement}>Increment +1 </button>
                    <button className="btn btn-success" onClick={()=> setCount(count + 2)}>Increment +2</button>
                    <button className="btn btn-success" onClick={()=> setCount(count + 5)}>Increment +5</button>
                    <button className="btn btn-danger" onClick={()=> setCount(count - 1)}>Decrement -1 </button>
                    <button className="btn btn-outline-warning" onClick={()=> setCount(0)}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default Counter;