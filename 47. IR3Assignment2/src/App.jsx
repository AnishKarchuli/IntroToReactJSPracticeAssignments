import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-3 flex-grow-1">
        <h1 className="display-2">Featured Products</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card my-2">
              <img src="https://placehold.co/400x300" alt="Product 1" className="card-img-top img-fluid rounded-top" />
              <div className="card-body">
                <h4 className="card-title">Product 1</h4>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link to="/products/1" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-2">
              <img src="https://placehold.co/400x300" alt="Product 2" className="card-img-top img-fluid rounded-top" />
              <div className="card-body">
                <h4 className="card-title">Product 2</h4>
                <p className="card-text">
                  Description of Product 2. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link to="/products/2" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-2">
              <img src="https://placehold.co/400x300" alt="Product 3" className="card-img-top img-fluid rounded-top" />
              <div className="card-body">
                <h4 className="card-title">Product 3</h4>
                <p className="card-text">
                  Description of Product 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link to="/products/3" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
