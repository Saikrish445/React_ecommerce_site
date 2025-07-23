import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return <p style={{ padding: "20px" }}>Your cart is empty.</p>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout Summary</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={() => {
          alert("Order placed successfully 🎉");
          setCartItems([]); // clear cart
          navigate("/");
        }}
      >
        Confirm Purchase
      </button>
    </div>
  );
}

export default Checkout;
