import React, { useState } from 'react'
import { Navbar , Footer, LoginPopup} from './components'
import { Route, Routes } from 'react-router-dom'
import { Home, Cart , PlaceOrder } from "./pages"

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>  
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div> 
       <Footer/>
    </>
  
  )
}

export default App