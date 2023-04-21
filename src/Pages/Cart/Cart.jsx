import React from 'react'
import { Tabs } from "../../Components/Tabs"
import Button from "../../Components/elements/Button"
import { useSelector } from 'react-redux'
import { cartProducts } from "../../stores/cart/cartSlice"
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import carticon from "../../assets/icons/shopping-cart.512x462.png"
import useTabSwitch from "../../hooks/useTabSwitch";
import AddressForm from '../../Components/AddressForm';

function Cart() {

  const cart = useSelector(cartProducts);
  const tabs= ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');


  
  if (!cart || cart.length === 0) {
    return (
        <div className="bg-white h-full text-black flex flex-col justify-center p-4">
            <img src={carticon} alt='cart icon' className='object-contain h-48 w-87'/>
            <h1 className='text-center mt-10'>Oops, your Cart is empty!</h1>
            
        </div>
    )
}

  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
              Summary
              <AddressForm />
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
              blah blah Address form
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
              PAY BITCH
            </div>
        </div>
  )
}

export default Cart