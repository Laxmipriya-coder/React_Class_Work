import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { lazy, Suspense } from 'react'

function App() {
  let HomeLazy = lazy(() => import('./Components/Lazy_Loading/Home.jsx'));
  let AboutLazy = lazy(() => import('./Components/Lazy_Loading/About.jsx'));
  let ProductLazy = lazy(() => import('./Components/Lazy_Loading/Product.jsx'));

  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading Please Wait 😊😊😊😊😊......</h1>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeLazy />} />
            <Route path='/about' element={<AboutLazy />} />
            <Route path='/product' element={<ProductLazy />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App