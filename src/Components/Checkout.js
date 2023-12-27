import React, { useContext } from 'react'
import {StateContext} from '../context/AppProvider'

const Checkout=()=> {
  const cartItems = useContext(StateContext)
  let checkout_item = cartItems.cartItem.map((item)=>{
    return (
      <div>
        <li>
        <img src={item.img}/>
       
        <h4>{item.title}</h4>
        
        </li>
      </div>
    )
  })
  return (
    <div className="container">
    <div className="checkout">
      <h2>this is a checkout page</h2>
      <ul className="flex  gap-30">{checkout_item}</ul>
    </div>
    </div>
  )
}

export default Checkout
