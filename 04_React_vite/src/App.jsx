import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

import Greet from "./Components/Greet";
import Button from "./Components/Button";

function App() {
  let c1 = {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_zL_cdgE6TY1KxBYDFQDYXu1ZeMPdehK4vYKjHQs-Q&s=10",
    title: "Bloom With Grace",
    desc: "A beautiful rose blooming with soft petals,adding a touch of elegance and natural beauty ",
    id: 101
  }
  let s1 = { name: "Laxmi", age: 22, spass: 'true' }
  let s2 = { name: "Shambhu", age: 22, spass: 'true' }
  return (
    <>
      <Navbar />
      <section className="container-fluid mt-4" style={{ fontFamily: "Times New Roman", textAlign: "center" }}>
        <div className="row">
          {/* <Card title="Rose" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit assumenda ullam sint impedit soluta laboriosam nemo at eum.
           Facere deserunt error a! Hic voluptates, a quisquam libero fuga dolore molestiae"/>
          <Card title="Lotus" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit assumenda ullam sint impedit soluta laboriosam nemo at eum.
           Facere deserunt error a! Hic voluptates, a quisquam libero fuga dolore molestiae"/>
          <Card  description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit assumenda ullam sint impedit soluta laboriosam nemo at eum.
           Facere deserunt error a! Hic voluptates, a quisquam libero fuga dolore molestiae"/>
          <Card title="Champa" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit assumenda ullam sint impedit soluta laboriosam nemo at eum.
           Facere deserunt error a! Hic voluptates, a quisquam libero fuga dolore molestiae"/> */}
        </div>
        <br></br>
        {/* <Greet data={s1} />
        <Greet data={s2} /> */}

        <Button color="danger">Click Me</Button>
        <Button color="dark">Buy Now</Button>
        <Button color="success">Add to Cart</Button>
        <Button color="warning">Remove From Cart</Button>
        
      </section>
    </>
  )
}
export default App;