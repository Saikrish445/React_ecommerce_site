import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Home.css";
import { toast } from "react-toastify";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa"; // install if needed

import { fetchProducts } from "../data/products";

function Home() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetchProducts().then(setProducts).catch(console.error);
}, []);


  // Filter products by name (case-insensitive)
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="home-container">
      <h2>All Products</h2>

      {/* ✅ Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
  {/* ❤️ Heart button */}
  <FaHeart
    size={20}
    color={isWishlisted(product.id) ? "red" : "#ccc"}
    onClick={(e) => {
      e.preventDefault(); // prevent Link from firing
      toggleWishlist(product);
    }}
    style={{ cursor: "pointer", float: "right", marginBottom: "5px" }}
  />

  <Link to={`/product/${product.id}`} className="product-link">
    <img src={product.thumbnail} alt={product.title} />
  </Link>
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
                toast.success(`${product.title} added to cart ✅`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
