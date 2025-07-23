import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "../styles/WishlistPage.css";

function WishlistPage() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return <p className="wishlist-empty">Your wishlist is empty 💔</p>;
  }

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist ❤️</h2>
      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image || product.thumbnail} alt={product.name || product.title} />
            </Link>
            <h4>{product.name || product.title}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => toggleWishlist(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
