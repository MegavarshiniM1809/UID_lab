import React from "react";
import Calculator from "./Calculator";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <header className="brand">
        <h1>CalcMate</h1>
        <p className="tagline"> React calculator</p>
      </header>
      <Calculator />
      <footer className="footer">
        <span>Performs basic arithmetic operations ✨</span>
      </footer>
    </div>
  );
}