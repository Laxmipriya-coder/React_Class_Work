import { useState } from "react";

function Products() {
    let products = [
        { id: 101, pname: "Pen", category: "stationary", qtn: 2 },
        { id: 102, pname: "Pencil", category: "stationary", qtn: 6 },
        { id: 103, pname: "Eraser", category: "stationary", qtn: 0 },
        { id: 104, pname: "Cutter", category: "stationary", qtn: 8 }
    ]

    const [prod, setprod] = useState(products);
    function handleIncrement(id){
        // console.log(id);
        setprod(prev => prev.map(ele => ele.id === id ? {...ele,qtn:ele.qtn + 1} : ele ))
    }
    function handleDecrement(id){
        // console.log(id);
        setprod(prev => prev.map(ele => ele.id === id ? {...ele,qtn:ele.qtn - 1} : ele ))
    }

    return (
        <>
            <section className="container-fluid mt-3">
                <h1>Products Page</h1>
                <div className="row">
                    {
                        prod.map(item => <div className="col-3 mb-3" key={item.id}>
                            <div className="card">
                                <div className="card-header bg-success">
                                    <h5>Product Name: {item.pname}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{item.category}</p>
                                    <button className="btn btn-success" onClick={()=> handleDecrement(item.id)}> - </button>
                                    <span> {item.qtn} </span>
                                    <button className="btn btn-danger"onClick={()=> handleIncrement(item.id)}> + </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </>
    )
}
export default Products;