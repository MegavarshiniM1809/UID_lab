import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">ShopEase</h1>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;