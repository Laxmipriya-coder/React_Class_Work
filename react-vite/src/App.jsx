import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import DashBoard from './Components/DashBoard';
import Profile from './Components/Profile';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='dashboard' element={<DashBoard />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />}>
          <Route path='productdetails/:id' element={<ProductDetails/>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App