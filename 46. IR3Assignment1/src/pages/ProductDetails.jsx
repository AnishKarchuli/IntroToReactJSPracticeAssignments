import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ProductDetails = () => {
  
  const { productId } = useParams();
  
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://placehold.co/300x200",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x200",
    },
  ];

  const productData = products.find(product => product.id === productId)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-4 flex-grow-1">
        <h1>{productData.name}</h1>
        <img src={productData.productImageUrl} className="my-3" />
        <p>Price: {productData.price}</p>
        <p>Description: {productData.description}</p>
        <p>Available Colors: {productData.availableColors.join(', ')}</p>
        <p>Return Policy: {productData.isReturnApplicable ? "Return applicable within 7 days" : "Not Applicable"}</p>
      </main>
      <Footer />
    </div>
  )
  
}

export default ProductDetails;