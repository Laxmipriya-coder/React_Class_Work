function Card({title = "Lily",description}) {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <h2>Title: {title} </h2>
                    </div>
                    <div className="card-body">
                        <p>Description: {description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;