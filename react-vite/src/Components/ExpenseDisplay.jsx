function ExpenseDisplay({ expense }) {
    return (
        <>
            <h4 className="mt-4 text-center">
                Recent Transactions
            </h4>
            {[...expense].reverse().map((item, index) => (
                <div className="card p-3 mt-3" key={index}>
                    <h5>{item.name}</h5>
                    <p>Amount: ₹{item.amount}</p>
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Time: {item.time}</p>
                </div>
            ))}
        </>
    );
}

export default ExpenseDisplay;