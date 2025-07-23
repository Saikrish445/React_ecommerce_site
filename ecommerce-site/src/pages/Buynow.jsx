import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/BuyNow.css";

function BuyNow() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get product data from navigation state
  const product = location.state?.product;

  if (!product) return <p>No product selected for purchase.</p>;

  return (
    <div className="buy-now-container">
  <h2>Checkout</h2>
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p>Price: ₹{product.price}</p>

  <button onClick={() => {
    alert("Payment Successful 🎉");
    navigate("/");
  }}>
    Confirm Purchase
  </button>

  <button className="back-btn" onClick={() => navigate("/")}>
    🏠 Go to Home
  </button>
</div>
  );
}

export default BuyNow;
