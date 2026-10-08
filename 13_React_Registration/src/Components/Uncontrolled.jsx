import React, { useRef } from 'react'

function Uncontrolled(){
    let inputRef = useRef('');
    const paraRef = useRef(null);
    console.log(inputRef);
    function handleSubmit(e){
        e.preventDefault();
        console.log(inputRef);
        console.log(inputRef.current);
        console.log(inputRef.current.value);

        console.log(paraRef);
        paraRef.current.textContent = "Hello Laxmi"
    }

    console.log("re-render...........");
  return (
    <>
    <h1>Uncontrolled Form</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Something...." ref={inputRef} />
        <input type="submit" className='btn btn-outline-primary'/>
        <p ref={paraRef}>Hello All</p>
    </form>
    </>
  )
}

export default Uncontrolled