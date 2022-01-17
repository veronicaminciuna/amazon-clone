import React, { Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={[<Header />, <Home />]} />
          <Route exact path="/checkout" element={[<Header />, <Checkout />]} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
