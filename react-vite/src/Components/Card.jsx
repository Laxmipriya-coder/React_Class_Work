
import { useEffect, useState } from "react";
import ExpenseDisplay from "./ExpenseDisplay";

function Card() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [expense, setExpense] = useState([]);
    
    // useEffect(()=>{
    //     console.log("UseEffect");
    // },[])

    function addExpense(e) {
        e.preventDefault();

        const newExpense = {
            name: name,
            amount: amount,
            category: category,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };

        setExpense([...expense, newExpense]);

        setName("");
        setAmount("");
        setCategory("");
    }

    const total = expense.reduce(
        (sum, item) => sum + Number(item.amount), 0
    );

    return (
        <div className="container mt-4">
            <div className="col-md-6 mx-auto">
                <div className="card shadow-sm p-4">
                    <h2 className="text-center mb-4">
                        My Expense Tracker
                    </h2>

                    <div className="d-flex gap-3 mb-4">
                        <div className="btn btn-outline-primary flex-fill p-3">
                            <h6>Total Expense</h6>
                            <h4><span>{'\u20B9'}</span>{total}</h4>
                        </div>

                        <div className="btn btn-outline-success flex-fill p-3">
                            <h6>Transactions</h6>
                            <h4>{expense.length}</h4>
                        </div>
                    </div>

                    <form onSubmit={addExpense}>
                        <input type="text" className="form-control mb-3"
                            placeholder="Enter expense name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <input type="number" className="form-control mb-3"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} />

                        <select className="form-select mb-3"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)} >
                            <option value="">Select Category</option>
                            <option>Food</option>
                            <option>Health</option>
                            <option>Household</option>
                            <option>Shopping</option>
                            <option>Travel</option>
                            <option>Other</option>
                        </select>

                        <button type="submit" className="btn btn-primary w-100">
                            Add Expense
                        </button>
                    </form>

                    <ExpenseDisplay expense={expense} />
                </div>
            </div>
        </div>
    );
}

export default Card;
