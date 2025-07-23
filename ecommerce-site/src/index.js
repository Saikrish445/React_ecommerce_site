import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext"; // ✅
import { WishlistProvider } from "./context/WishlistContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <WishlistProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WishlistProvider>
  </CartProvider>
);
