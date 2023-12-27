import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'
import { DispatchContext } from '../context/AppProvider'



function PopUp({ closePopup, currentDish, addtoCartHandler }) {
  const specialMenu = useContext(AllMenuContext)
  const dispatch = useContext(DispatchContext)


  let filter_specialDish = specialMenu.filter((menuItem) => {
    return menuItem.strMeal === currentDish
  }).map((Item) => {
    return (
      <div className="popup-content-data">
        <div className="popup-header">
          <img src={Item.strMealThumb} className="br-10" alt="" />
          <h5 className="popup-header-category">{Item.strCategory}</h5>
        </div>
        <h2>{Item.strMeal}</h2>
        <p>{Item.strInstructions}</p>
        <ul className="dish-ingredients flex">
          <li>{Item.strIngredient1}</li>
          <li>{Item.strIngredient2}</li>
          <li>{Item.strIngredient3}</li>
        </ul>
        <button onClick={() => dispatch({
          type: "add_to_cart",
          payload: {
            img: Item.strMealThumb,
            title: Item.strMeal,
          }
        })
        }>
          Add to cart</button>
        <h5 className="popup-close" onClick={closePopup}>close</h5>
      </div>
    )
  })

  console.log(filter_specialDish)

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{filter_specialDish}</h2>

      </div>
    </div>
  )
}

export default PopUp
