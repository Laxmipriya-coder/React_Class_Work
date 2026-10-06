import React, { use, useState } from 'react'
import Child from './Child';

function Parent(){
     const[city,setCity] = useState('Banglore');
     const[cData,setCData] = useState('');
     function getData(data){
         console.log(data);
         setCData(data)
     }
  return (
    <>
    <h1>Parent Component</h1>
    <Child city = {city} getData = {getData}/>
    <h4>Child Data{cData}</h4>
    </>
  )
}

export default Parent