function Greet(){
    function handleclick(e){
        console.log(e);
        console.log("I am Clicked...............");
    }

    function handleselect(name){
        console.log(name);
        console.log("Select Button Clicked...........");
    }

    function handleSelectRef(){
        console.log('Select button is clicked so i call the main Function');
        handleselect("Hello Sudha")
    }
    return (
        <>
        <h1>Greet Component</h1>
        <button className="btn btn-danger" onClick={handleclick}>Click me</button> <br /><br />
        <button className="btn btn-success" onClick={()=> handleselect("Laxmipriya")}>Select It</button><br></br><br></br>
        <button className="btn btn-warning" onClick={handleSelectRef}>Select Reference</button>
        </>
    )
}
export default Greet;