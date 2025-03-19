import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom"

export default function Blogs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-4 flex-grow-1">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Blog 1</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/blogs/1" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Blog 2</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/blogs/2" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Blog 3</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/blogs/3" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
