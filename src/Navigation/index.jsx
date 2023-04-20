import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../Components/Header";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Menu from '../Pages/Menu';
import PaymentSucces from '../Pages/PaymentSuccess';
import Register from '../Pages/Register';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);
  return (
    <BrowserRouter> 
        <Header cartCount={productsInCart ? productsInCart.length : 0} />
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