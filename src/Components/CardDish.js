import React from "react";

function CardDish(props) {
   
  return (
    <li>
      <a href="#" onClick={()=>{props.showPopupHandler(props.menuItem.strMeal)}}>
      <img src={props.menuItem.strMealThumb} className="br-10" />
      <h4>{props.menuItem.strMeal}</h4>
      </a>
    </li>
  );
}

export default CardDish;
