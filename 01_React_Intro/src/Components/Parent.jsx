function Parent(){
    let sname = 'Laxmipriya'
    function handleClick(){
        console.log("Hello All");
    }
    handleClick();
    return(
        <>
        <h1>Parent Component</h1>
        <label htmlFor="">User Name</label>
        <input type="text" />
        <br />
        <p>{1+2}</p>
        <h1>{console.log("Hello")}</h1>
        <h3 className="red">Student name: {sname}</h3>
        <h1>Child Component</h1>
        <ol>
            <li>Apple</li>
            <li>Mango</li>
            <li>Banana</li>
            <li>Litchi</li>
            <li>Strawberry</li>
        </ol>
        </>
    )
}
export default Parent