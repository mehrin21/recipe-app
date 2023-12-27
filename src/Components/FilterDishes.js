import React, { useContext, useState , useEffect} from 'react'
import Pagenation from './Pagenation'
import CardDish from './CardDish'
import PopUp from "./popUp";
import { AllMenuContext } from './AllMenuContext';


function FilterDishes(props) {

  const Menus = useContext(AllMenuContext)
  let [category, setCategory] = useState([]);
  let [singleDish, setSingle] = useState([]);
  let [allMenus,setAllmenus] = useState(Menus)
  let [filteredDishes,setFilteredDishes] = useState([])
  let [activeDish,setActiveDish] = useState("Beef")
  let [currentPage,setCurrentPage] = useState(1)
  let [itemPerPage,setItemPerPage] =useState(4)
   
  // POPUP
  let [showPopUp,setShowPopUp] = useState(false)
  let [currentDish,setcurrentDish] = useState('')

  //   callback function of useEffect
  async function getAllCategory() {
    const API_Url = "https:/www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_Url);
    let category_data = await response.json();
    setCategory(category_data.categories);
  }
  async function getOnlyOneDish() {
    const API_Url = "https:/www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_Url);
    let sigleDishData = await response.json();
    setSingle(sigleDishData.meals);
  }

  useEffect(() => {
    getAllCategory();
    getOnlyOneDish();
  }, []);

    function showPopupHandler(dishname) {
      setShowPopUp(true)
      setcurrentDish(dishname)
    }
    function closePopup(){
      setShowPopUp(false)
    }

   
    let indexOfLastDish =  currentPage * itemPerPage;
    let indexOfFirstDish = indexOfLastDish - itemPerPage
    let ShowtheDish = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
    // SHOWING SINGLE DISHES
    let maxSingleItem = 4
    let singleDishItem = singleDish.map((item,index)=>{
      if(index < maxSingleItem ){
      return(
        
        <li>
         
        <img src={item.strMealThumb} alt="" className="br-10" />
        <h5>{item.strMeal}</h5>
      </li>
  
      )
      }
    })
  

    // show the filtered dishes
    function showResultDishes(category){
      setSingle([])
      console.log("category " ,category)
      setActiveDish(category)
      let filteredDishesAre = allMenus.filter((item)=>{
        return item.strCategory ===  category
      }).map((item)=>{
          return (
           <CardDish menuItem={item}  showPopupHandler={showPopupHandler} />
        
          )
      })
      setFilteredDishes(filteredDishesAre)
    }
    // let show the category
     let filter_categories = category.map((item)=>{
         return (
          <li className={item.strCategory === activeDish ? "active" : ""} 
          onClick={()=>{showResultDishes(item.strCategory)}}>{item.strCategory}</li>
         )
     })
     console.log("filter_categories " ,filter_categories)

  return (
    <div className="filtered-dishes">
      <div className="container">
      {showPopUp && <PopUp 
      closePopup={closePopup} 
      currentDish={currentDish}
      specialMenu = {props.Menu}/> }
        <div className="filtered-dishes-content text-center">
        <h2>Choose Your Dishes</h2>
        <p>It is a long established fact that a reader will be 
          distracted by the readable content of a page 
          when looking at its layout.</p>
      </div>

       <div className="filtered-dishes-list">
      
        <ul>
            {filter_categories}
        </ul>
       </div>
        <div className="filtered-dishes-result">
          <ul className="flex flex-wrap gap-30">
            {singleDishItem}
            {singleDishItem.length !== 0 || filteredDishes.length !== 0 ?  ShowtheDish : 
            <div className="alert">
              <h3>Sorry,no items found</h3>
              <h4>plz,try another dishes</h4>
              </div> }
             
          </ul>
        </div>
        <Pagenation 
        filteredDishes={filteredDishes} 
        itemPerPage={itemPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}/>
     </div>
    </div>
  )
}

export default FilterDishes
