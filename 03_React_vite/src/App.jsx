
import Card from "./Components/Card.jsx";
import Greet from "./Components/Greet.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <section className="container-fluid mt-3">
        <div className="row">
          <Card imgUrl = 'https://th.bing.com/th/id/OIP.6Jj9d7HhIraACVNnvky_8AHaEK?w=307&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=' className="img-fluid" alt="Not found"/>
        </div>
        <br></br>
        <Greet sname='Laxmipriya' sage={21} spass = 'true'/>
      </section>
    </>
  )
}
export default App;