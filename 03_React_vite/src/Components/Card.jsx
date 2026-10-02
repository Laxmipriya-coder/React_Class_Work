function Card(props) {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img src="https://th.bing.com/th/id/OIP.6Jj9d7HhIraACVNnvky_8AHaEK?w=307&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=" className="img-fluid" alt="Not found" />
                    </div>
                    <div className="card-body">
                        <h2>Title: {props.title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;