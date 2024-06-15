import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../screens/LandingPage';
import Products from '../screens/Products';
import Header from './Header';
import ProductDetails from '../screens/ProductDetails';
function RoutesScreen() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<Products />} />       
        <Route path="productsDetails" element={<ProductDetails />} />       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesScreen