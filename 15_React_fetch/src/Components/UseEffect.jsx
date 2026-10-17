import React, { useEffect, useState } from 'react'
import Data from "../Components/Data";

function UseEffect() {
    const [like, setLikes] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        console.log("UseEffect Without Dependency Array");
    })
    useEffect(() => {
        console.log("UseEffect with empty Dependency Array");
    }, []);
    useEffect(() => {
        console.log("UseEffect with Dependency Array");
    }, [like])
    console.log("re-render");
    return (
        <>
            <h1>Instagram</h1>
            <button className='btn btn-outline-danger ms-3' onClick={() => setLikes(like + 1)}>Like {like}</button>
            <button className='btn btn-outline-success ms-3' onClick={() => setDislike(dislike + 1)}>Dislike {dislike}</button>

            {
                isShow ? (
                    <Data isShow={isShow} setIsShow={setIsShow} />
                ) : (
                    <button
                        className="btn btn-outline-primary ms-2"
                        onClick={() => setIsShow(true)}
                    >
                        Show
                    </button>
                )
            }
        </>
    )
}

export default UseEffect