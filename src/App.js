// Import Redux
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
// Import Pages
import About from "./pages/About";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import NewsLetter from "./pages/NewsLetter";
import Shop from "./pages/Shop";
import ShoppingBag from "./pages/ShoppingBag";
import SingleProduct from "./pages/SingleProduct";

import { fetchProduct } from "./redux/product/productSlice";


const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProduct())
 
  },[dispatch])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/shoppingbag" element={<ShoppingBag />} />
      </Routes>
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
