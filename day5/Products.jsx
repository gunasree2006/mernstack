import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "₹55,000",
      description: "High performance laptop for coding and development",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "₹25,000",
      description: "Latest Android smartphone with powerful camera",
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹2,500",
      description: "Noise cancelling wireless headphones",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "₹4,000",
      description: "Fitness tracking smart watch with heart rate monitor",
    },
    {
      id: 5,
      name: "Keyboard",
      price: "₹1,200",
      description: "Mechanical keyboard for fast typing",
    },
  ];

  return (
    <div className="page">
      <h1>Our Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;