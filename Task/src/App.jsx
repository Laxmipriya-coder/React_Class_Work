import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import rose from '../Images/rose2.avif';
import rose2 from '../Images/white2.jpg';
import pink from '../Images/rose.jpg'

function App() {
   let c1 = {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_zL_cdgE6TY1KxBYDFQDYXu1ZeMPdehK4vYKjHQs-Q&s=10",
        title: "Bloom With Grace",
        desc: "A beautiful rose blooming with soft petals,adding a touch of elegance and natural beauty ",
        id: 101
    }
  return (
    <>
    <Navbar/>
      <section className="container-fluid mt-4" style={{fontFamily:"Times New Roman",textAlign:"center"}}>
        <div className="row">
          <Card imageUrl={c1.imgUrl} title ={c1.title} description={c1.desc} imgId = {c1.id}/>
          <Card imageUrl= {rose} title ='Beauty in Every Petal' description ="A beautiful rose with soft petals, blooming gracefully and adding a touch of natural beauty" imgId={102}/>
          <Card imageUrl ={rose2} title = {c1.title} description={c1.desc} imgId ={103}/>
          <Card imageUrl = {pink} title = {c1.title} description = {c1.desc} imgId = {104}/>
        </div>
        <br></br>
      </section>
    </>
  )
}
export default App;