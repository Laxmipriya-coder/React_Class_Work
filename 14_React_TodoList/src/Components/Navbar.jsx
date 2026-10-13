function Navbar({total}) {
    return (
        <>
            <nav className="navbar bg-warning">
                <div className="container-fluid">
                   <a href="#" className="navbar-brand">Todo App</a>
                    <button className="btn btn-success">Total Tasks: {total}</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;