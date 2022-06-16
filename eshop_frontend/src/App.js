import "./App.css";
import Navbar from "./Components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./Components/ProductCard";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import BasketPage from "./Pages/BasketPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/basket" element={<BasketPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
