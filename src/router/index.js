import React from "react";

import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Card from "../pages/Card";
import Contact from "../pages/Contact";



const Router = () => {
  return (
    <Routes
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/card" element={<Card />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default Router;
