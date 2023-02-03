import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Futter from "./components/Futter/Futter";
import Navbar from "./components/Navbar/Navbar";

import Router from "./router";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Router />
          <Futter />
        </BrowserRouter>


      </div>
    </>
  );
}

export default App;
