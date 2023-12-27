import React, { useState,createContext,useEffect } from 'react'
import Loading from "./Loading";
export const AllMenuContext = createContext()

export const AllMenus = (props)=> {
 let [menu, setMenu] = useState([]);
 let [loading, setLoading] = useState(true);
    //   callback function of useEffect
    async function getAllink() {
        const API_Url = "https:/www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_Url);
        let data = await response.json();
        setMenu(data.meals);
        setLoading(false);
      }
      useEffect(() => {
        getAllink();
      }, []);

  return (
    <AllMenuContext.Provider value={menu} >
    {!loading ? props.children : <Loading />}
    </AllMenuContext.Provider>
  )
}


