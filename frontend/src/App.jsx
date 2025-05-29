import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
  )
}

export default App
