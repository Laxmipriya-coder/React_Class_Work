
import React, { useState } from 'react';

function Character() {
    const [text, setText] = useState("");

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-5 m-auto text-center">
                        <form>
                            <input type="text" placeholder="Enter Your Character" value={text}
                                onChange={(e) => setText(e.target.value)} />
                            <h4>Characters: {text.length}</h4>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Character;
