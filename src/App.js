import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home";
import Router from "./router";
import Carousel from 'react-elastic-carousel'
import { Box } from "@mui/material";
import Blogpost from "./pages/Blockpost";
import Req from "./pages/Re";
import Product from "./pages/Product";

function App() {

  return (
    <>
      <div>
        {/* <BrowserRouter>
          <Router />
        </BrowserRouter> */}
        <Home />
        {/* <Blogpost /> */}
        {/* <Req/> */}
        {/* <Product /> */}
        

      </div>
    </>
  );
}

export default App;
