function Counter(){
    const count = useSelector(state => state.count);
    console.log(count);
    const dispatch = useDispatch()
    return(
        <>
        <h1>Counter App</h1>
        <h4>Count : {count}</h4>
        <button onClick={() => dispatch({type:'INC'})}>Increment</button>
        </>
    )
}
export default Counter;