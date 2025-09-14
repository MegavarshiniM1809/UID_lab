import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;