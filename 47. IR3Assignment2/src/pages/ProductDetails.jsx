import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { products } from "./Products"

const ProductDetails = () => {
  
  const { productId } = useParams();

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