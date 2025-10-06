import React, { useState } from "react";

function ItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !quantity) {
      alert("Please fill all fields!");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      description,
      quantity,
    };

    setItems([...items, newItem]);

    setName("");
    setDescription("");
    setQuantity("");
  };

  return (
    <div className="container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <h3>Item List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description} (Qty: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemForm;
