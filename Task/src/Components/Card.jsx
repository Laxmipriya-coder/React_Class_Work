function Card(props) {
    let count = 0;
    let handleclick = (e)=>{
        count++;
        e.target.innerText = `Like ${count}`
    }
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img src={props.imageUrl} className="img-fluid"/>
                    </div>
                    <div className="card-body">
                        <h2>Title: {props.title} </h2>
                        <p>Description: {props.description}</p>
                        <h5>Id: {props.imgId}</h5>
                        <button className="btn btn-outline-success"id="btn" onClick={handleclick}>Like 0</button>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;