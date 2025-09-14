import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn decrement" onClick={() => setCount(count - 1)}>-</button>
          <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
          <button className="btn increment" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
