import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css" // ✅ Import CSS file
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistPage from "./pages/WishlistPage";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // Set CSS variables dynamically for dark/light mode
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-bg",
      darkMode ? "#222" : "#f5f5f5"
    );
    document.documentElement.style.setProperty(
      "--navbar-text",
      darkMode ? "#fff" : "#000"
    );
    document.documentElement.style.setProperty(
      "--body-bg",
      darkMode ? "#121212" : "#fff"
    );
    document.documentElement.style.setProperty(
      "--body-text",
      darkMode ? "#fff" : "#000"
    );
  }, [darkMode]);

  return (
    <Router>
      {/* Navbar */}
      <div className="navbar">
        <div>
          <Link to="/">🏠 Home</Link>
          <Link to="/cart">🛒 Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Page Body */}
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />

    </Router>
  );
}

export default App;
