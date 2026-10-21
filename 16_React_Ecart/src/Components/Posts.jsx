import React, { useEffect } from 'react'
import Axios from 'axios';

function Posts(){
    useEffect(()=>{
        fetchPosts()
    },[])
    async function fetchPosts(){
        let res = await Axios.get("https://dummyjson.com/products");
        console.log(res);
        console.log(res.data);
    }
  return (
    <>
    <h1>Posts Page</h1>
    </>
  )
}

export default Posts