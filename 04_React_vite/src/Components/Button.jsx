function Button({children,color=success}){
    return(
        <>
        <button className={`btn btn-${color} mx-2`}>{children}</button>
        </>
    )
}
export default Button;