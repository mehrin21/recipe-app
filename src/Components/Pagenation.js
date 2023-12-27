import React from 'react'

function Pagenation(props) {
    console.log("fb0" ,props.itemPerPage)

    let noofPages = []
    for(let i = 1;i<=Math.ceil(props.filteredDishes.length/props.itemPerPage);i++){
        noofPages.push(i)
        // console.log(i)
    } 

    function showNextDishesHandler(event){
               let currentPage = event.target.id
               props.setCurrentPage(currentPage)
    }
    
    let pages= noofPages.map((pageNum)=>{
        return(
            <li id={pageNum} onClick={showNextDishesHandler}>{pageNum}</li>
        ) 
    })

  return (
    <section>
    <ul className="pagination flex">
     {pages}
    </ul>
    </section>
  )
}

export default Pagenation
