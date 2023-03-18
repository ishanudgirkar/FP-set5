export default function Onlinestore() {
  const products = [
    {
      id: 1,
      name: "iPhone 12",
      price: 999,
      category: "Electronics"
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: 249,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Amazon Echo",
      price: 99,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 199,
      category: "Clothing"
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 89,
      category: "Shoes"
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 79,
      category: "Appliances"
    },
    {
      id: 7,
      name: "Smart TV",
      price: 799,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Winter Coat",
      price: 249,
      category: "Clothing"
    },
    {
      id: 9,
      name: "Gaming Mouse",
      price: 69,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Backpack",
      price: 59,
      category: "Accessories"
    }
  ];

  return (
    <div>
      <h2>Online Store</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} : Rs {product.price} , ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
