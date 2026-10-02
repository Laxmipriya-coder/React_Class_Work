import Home from "./Home"

function Container(){
    let styleObj = {color : 'pink', backgroundColor:'pink',border:'15px solid blue',height:"150px",width:"150px",margin:"auto"}
    return (
        <>
            <h1 style={{textAlign:"center"}}>Container Component</h1>
            <div style={{color : 'pink', backgroundColor:'skyblue',border:'15px solid blue',height:"150px",width:"150px",margin:"auto"}}></div>
            <br />
            <div style={styleObj}></div>
            <h3>Container Ends</h3>
            <Home/>
        </>
    )
}
export default Container