import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import PopUp from "./popUp";
import { AllMenuContext } from "./AllMenuContext";
import Addtocart from "./Addtocart";



function SplDishes() {
const allMenu = useContext(AllMenuContext)
console.log("allmenu" , allMenu) 
// POPUP
let [showPopUp,setShowPopUp] = useState(false)
let [currentDish,setcurrentDish] = useState('')
let [addtoCart,setAddtoCart] = useState([{}])

// console.log("addtoCart",addtoCart)

function showPopupHandler(dishname) {
  // console.log("dishname " , dishname)
  setShowPopUp(true)
  setcurrentDish(dishname)
}
function closePopup(){
  setShowPopUp(false)
}

// Add to cart 
function addtoCartHandler(addtoCartImg,addtoCartTitle){
  setAddtoCart([
    ...addtoCart,
    {
     "img" : addtoCartImg,
     "title" : addtoCartTitle
    }
  ])
}

let maxDishes = 8

let specialMenus = allMenu.map((menuitem,index)=>{
  if(index <maxDishes){
          return(
            <CardDish menuItem={menuitem}  showPopupHandler={showPopupHandler}/> 
          )
  }  
})

  return (
    <section className="special-dishes">
     
      {showPopUp && <PopUp 
      closePopup={closePopup} 
      currentDish={currentDish}
      addtoCartHandler= {addtoCartHandler}
      /> }
      <div className="container">
      <Addtocart addtoCart={addtoCart} />
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="special-dishes-list ">
        <ul className="flex flex-wrap gap-30">{specialMenus}</ul>

        </div>
      </div>
    </section>
  );
}

export default SplDishes;
