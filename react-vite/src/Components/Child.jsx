import React, { useState } from 'react'

function Child({city,getData}){
    const[country,setCountry] = useState('India');
    function handleClick(){
        getData(country)
    }
  return (
    <>
    <div style={{backgroundColor:"yellow"}}>
    <h2>Child Component</h2>
    <p>Parent Data:  {city}</p>
    <button className='btn btn-outline-success m-4' onClick={handleClick}>Send Data</button>
    </div>
    </>
  )
}
 
export default Child