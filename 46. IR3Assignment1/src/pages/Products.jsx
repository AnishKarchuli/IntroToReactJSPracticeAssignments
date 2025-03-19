import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Products() {
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

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-3 flex-grow-1">
        <h1>Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-12" key={product.id}>
              <div className="card mt-3">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://placehold.co/300x200"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                      alt={product.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p>{product.description}</p>
                      <p className="text-secondary">Price: {product.price}</p>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-primary"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
