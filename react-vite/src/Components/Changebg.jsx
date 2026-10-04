import { useState } from "react";
function Changebg(){
    const[bgcolor,setBgcolor] = useState('yellow')
    return (
        <>
        <h1>Change Background Color</h1>
        <div style={{backgroundColor : bgcolor,height:"200px",width:"200px",border:"5px solid black",textAlign:"center"}}></div>
        <br></br>
        <button className="btn btn-outline-warning" onClick={()=>setBgcolor("blue")}>Change</button>
        </>
    )
}
export default Changebg;