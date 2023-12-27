import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./Hero";
import Header from "./Header";
import SplDishes from "./SplDishes";
import FilterDishes from "./FilterDishes";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider"

function Menu() {
  return (
    <div>
      <Router>
      <AppProvider>
        <Header />
        <Hero />
        <Routes>
          {/* page 1 */}
          <Route path="/" element={<AllMenus><SplDishes /><FilterDishes /></AllMenus>} />

          {/* page 2 */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default Menu;
