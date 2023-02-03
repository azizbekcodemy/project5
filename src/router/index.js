import React from "react";

import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Card from "../pages/Card";
import Contact from "../pages/Contact";
import Home from "../pages/home";
import Product from "../pages/Product";
import Blogpost from "../pages/Blockpost";
import Req from "../pages/Re";



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/req" element={<Req />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogpost" element={<Blogpost />} />
      <Route path="/card" element={<Card />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default Router;
