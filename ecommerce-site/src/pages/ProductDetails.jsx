import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../data/products";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((allProducts) => {
      const selectedProduct = allProducts.find(
        (p) => p.id === parseInt(id)
      );
      setProduct(selectedProduct);
    });
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
