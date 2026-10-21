import React, { useEffect } from 'react'

function Data({ isShow, setIsShow }) {
    useEffect(() => {
        console.log("UseEffect function with cleanup function");
        return () => {
            console.log("Clean Up Code");
        }
    }, [])
    return (
        <>
            <div className="card-body">
                <h1>Data is Present here</h1>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => setIsShow(false)}
                >
                    Hide
                </button>
            </div>
        </>
    )
}

export default Data