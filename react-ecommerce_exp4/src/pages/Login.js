import React from "react";

function Login() {
  return (
    <div className="page">
      <h2>Login to ShopEase</h2>
      <form style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: "10px", margin: "8px 0" }} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" style={{ width: "100%", padding: "10px", margin: "8px 0" }} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;