function Greet({data}){
    console.log(data);
    let {age,name,spass} = data
    return (
        <>
        <h1>Hello {name}</h1>
        <p>Age: {age} </p>
        <p>Pass: {spass} </p>
        </>
    )
}
export default Greet;