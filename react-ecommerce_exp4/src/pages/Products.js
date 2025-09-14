import React from "react";
import "./Products.css"; // import the CSS file

function Products() {
  return (
    <div className="products-container">
      {/* Product 1 */}
      <div className="product-card">
        <img src="/nike_shoes.webp" alt="Nike Shoes" className="product-img" />
        <h3>Nike Shoes</h3>
        <p>Comfortable and stylish everyday wear.</p>
        <button>Add to Cart</button>
      </div>

      {/* Product 2 */}
      <div className="product-card">
        <img src="/sony_headphones.jpg" alt="Sony Headphones" className="product-img" />
        <h3>Sony Headphones</h3>
        <p>Experience premium sound quality.</p>
        <button>Add to Cart</button>
      </div>

      {/* Product 3 */}
      <div className="product-card">
        <img src="/iphone.webp" alt="iPhone" className="product-img" />
        <h3>iPhone 15</h3>
        <p>Latest Apple iPhone with A16 chip.</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Products;
