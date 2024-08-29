import './App.css'

const ProductPage = ({ productInfo }) => {
  return (
    <div>
      <h2>Product Page</h2>
      <h3>{productInfo.name}</h3>
      <img src={productInfo.imageUrl} />
      <p><strong>Price: </strong>${productInfo.price}</p>
      <p><strong>Color: </strong>{productInfo.color}</p>
      <p><strong>Description: </strong>{productInfo.description}</p>
      <p><strong>{productInfo.inStock ? "In Stock" : "Currently out of stock."}</strong></p>
      <p>&copy; 2024 Apple Inc.</p>
    </div>
  )
}

export default function App() {

  const productInfo = {
    name: "iPhone 15 Pro",
    imageUrl: "https://via.placeholder.com/150",
    price: 499.99,
    color: "Midnight Green",
    description: "The latest flagship smartphone from Apple with cutting-edge features and stunning design.",
    inStock: true
  }
  return (
    <ProductPage productInfo={productInfo} />
  )
}
