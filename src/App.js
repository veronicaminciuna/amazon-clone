import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
