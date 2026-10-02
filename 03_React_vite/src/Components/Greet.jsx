function Greet(props){
    return (
        <>
        <h1>Hii {props.sname}</h1>
        <h2>Age: {props.sage} </h2>
        <h3>Pass: {props.spass} </h3>
        </>
    )
}
export default Greet;