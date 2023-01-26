
import React from "react";
import "./style.css"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Router from "./router";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
