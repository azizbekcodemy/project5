import React from "react";
import "./style.css"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Router from "./router";
import Futter from "./components/Futter/Futter";

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          {/* <Router /> */}
          <Futter />
        </BrowserRouter>
    </>
  );
}

export default App;