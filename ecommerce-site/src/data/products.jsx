// products.jsx

export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=50");
  const data = await res.json();
  return data.products;
}


