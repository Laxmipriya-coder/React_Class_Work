import React, { useReducer, useState } from 'react'
import CountReducer from './Reducer/CountReducer'

function Counter() {

    const [count, dispatch] = useReducer(CountReducer, 0);
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <section className="card m-auto mt-4" style={{ maxWidth: "520px", textAlign: "center" }}>
                <div className="card-body">
                    <h1 className="card-title">Counter App</h1>
                    <h4>Count : {count}</h4>
                    <button onClick={() => dispatch({ type: 'INC' })}
                        className="btn btn-success">
                        Increment
                    </button>
                    <button onClick={() => dispatch({ type: 'DEC' })}
                        className="btn btn-primary ms-2">
                        Decrement
                    </button>
                    <input type="number" className="form-control mt-3"
                        placeholder="Enter a number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <button
                        onClick={() => {
                            dispatch({
                                type: 'INCBY',
                                payload: Number(inputValue)
                            });

                            setInputValue('');
                        }}
                        className="btn btn-warning mt-3"
                        disabled={inputValue === ''}
                    >
                        Add to Count
                    </button>

                    <button onClick={() => dispatch({ type: 'RESET' })}
                        className="btn btn-danger ms-2 mt-3">
                        Reset
                    </button>

                </div>
            </section>
        </>
    )
}

export default Counter;
