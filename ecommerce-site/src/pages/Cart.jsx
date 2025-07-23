import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
              <img src={item.image} alt={item.name} style={{ width: "100px" }} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>

        </>
      )}
      <br />
      <button onClick={() => navigate("/")}>🏠 Go to Home</button>

      {cartItems.length > 0 && (
  <button
    style={{ marginTop: "20px" }}
    onClick={() => navigate("/checkout")}
  >
    Buy Now 🛍️
  </button>
)}
    </div>
  );
}

export default Cart;
