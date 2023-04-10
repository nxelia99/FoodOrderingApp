import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../Components/Header";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Menu from '../Pages/Menu';
import PaymentSucces from '../Pages/PaymentSuccess';
import Register from '../Pages/Register';

const Navigation = () => {
  return (
    <BrowserRouter> 
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment-success' element={<PaymentSucces />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation