import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'

const UsersData = () => {

    const [allproducts, setAllproducts] = useState([])
    const [currentUser,setCurrentuser]=useState(null)

    const fetchData = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        setAllproducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
  
    const handleUsers=(e)=>{
        const {value}=e.target
        const user=allproducts.filter((ele)=>ele.title===value)
        setCurrentuser(user)
    }





    return (
        <div className='d-flex column-gap-10'>

            

            <div className="form-field w-25">
                <label htmlFor="fieldSelect" className="form-label">Country</label>
                <select onChange={handleUsers} className="form-control" id="fieldSelect" defaultValue="">
                    <option value="">Choose one…</option>
                    {
                        allproducts.map((product)=>{
                            return(
                                <option key={product.id} value={product.title}>{product.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            {
                currentUser?.map((user) => {
                    return (
                        <section key={user.id} className="card" style={{ maxWidth: "320px" }}>
                            <img src={user.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{user.title}</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn-solid theme-primary">Go somewhere</a>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default UsersData
