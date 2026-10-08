import React, { useState } from 'react'

function Controller(){
    const[input,setInput] = useState('');
    function handleInput(e){
        console.log(e);
        console.log(e.target.value);
        // console.log("Input Changed.....");
        setInput(e.target.value)
    }
    // console.log("re-render");
  return (
    <>
    <h1>Controlled Forms</h1>
    <input type="text" value={input} onChange={handleInput} />
    </>
  )
}

export default Controller