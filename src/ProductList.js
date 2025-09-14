import React from "react";

const products = [
  { id: 1, name: "Wireless Headphones", description: "High quality sound with noise cancellation.", image: "/images/headphones.webp" },
  { id: 2, name: "Smart Watch", description: "Stay connected with health tracking features.", image: "/images/watch.webp" },
  { id: 3, name: "iPhone 15 Pro", description: "Powerful performance with pro-level camera features.", image: "/images/mobile.jpg" }
];


function ProductList() {
  return (
    <section className="product-list" id="products">
      <h2>Featured Products</h2>
      <div className="list-items">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;