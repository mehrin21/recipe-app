import React, { useContext } from 'react'
import {StateContext} from '../context/AppProvider'

const Addtocart = ({addtoCart})=> {
  
  const cartItems = useContext(StateContext)
  console.log("cartItems ",cartItems)

  let cartItemsAre = cartItems.cartItem.map((item)=>{
    return (
      <div>
        <img src={item.img}/>
        <h6>{item.title}</h6>
      </div>
    )
  })


  // map the addtocart item
  let result = addtoCart.map((item)=>{
    return (
      <div>
        <img src={item.img} />
        <h6>{item.title}</h6>
      </div>
    )
  })
  console.log(result.length)
  
  return (
    <div className="addtocart-wrapper">
      <div className="addtocart-item">
        <h6 className="text-center">your cart</h6>
        {cartItemsAre}
      </div>
    </div>
  )
}

export default Addtocart
