
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from '../Features/CountSlice';

function Counter() {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow text-center p-4" style={{ width: '350px' }}>
                <h3 className=" fw-bold">Counter App</h3>
                <h1 className="my-4 fw-bold">Count {count}</h1>
                <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
                        Decrement
                    </button>
                    <button className="btn btn-success" onClick={() => dispatch(increment())}>
                        Increment
                    </button>
                </div>
                <button className="btn btn-primary mt-3" onClick={() => dispatch(incrementBy(10))}>
                    Increment By 5
                </button>
            </div>
        </div>
    );
}

export default Counter;
