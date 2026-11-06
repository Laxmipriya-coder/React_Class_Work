import React, { useMemo, useState } from 'react'

function DataHandle() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDisLikes] = useState(0);

    let handleSquare = useMemo(() => {
        let i = 0;
        while (i < 2000000) i++;
        return likes * likes
    }, [likes]);

    let square = handleSquare;

    let handleCube = useMemo(() => {
        let i = 1;
        while (i < 30000) i++;
        return dislikes ** 3
    }, [dislikes]);
    let cube = handleCube;
    return (
        <>
            <section className="card mt-4 m-auto" style={{ maxWidth: "320px" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h2>Likes Count : {likes} </h2>
                    <button className='btn btn-outline-primary' onClick={() => setLikes(likes + 1)}>Increment Like</button>
                    <h3>Square of Like : {square} </h3>
                    <hr />
                    <h2>Dislike Count : {dislikes} </h2>
                    <button className="btn btn-outline-danger" onClick={() => setDisLikes(dislikes + 1)}>Increment Dislike</button>
                    <h3>Cube of Dislike : {cube} </h3>
                </div>
            </section>
        </>
    )
}

export default DataHandle