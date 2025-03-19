import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Restaurants() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-4 flex-grow-1">
        <h1>Restaurants</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="The Golden Spoon"
                    className="img-fluid rounded h-100"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">The Golden Spoon</h5>
                    <p className="card-text">
                      Enjoy authentic Indian cuisine at The Golden Spoon.
                      Explore a variety of delicious dishes from different
                      regions of India.
                    </p>
                    <p className="text-secondary">Rating 4.7 | Open Now</p>
                    <Link to="/restaurants/1" className="btn btn-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Spice Junction"
                    className="img-fluid rounded h-100"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Spice Junction</h5>
                    <p className="card-text">
                      Indulge in mouth-watering pizzas at Spice Junction. With a
                      variety of toppings and crusts, it's a pizza lover's
                      dream.
                    </p>
                    <p className="text-secondary">Rating: 4.5 | Open Now</p>
                    <Link to="/restaurants/2" className="btn btn-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Sushi Delight"
                    className="img-fluid rounded h-100"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Sushi Delight</h5>
                    <p className="card-text">
                      Indulge in mouth-watering pizzas at Sushi Delight. With a
                      variety of toppings and crusts, it's a pizza lover's
                      dream.
                    </p>
                    <p className="text-secondary">Rating: 4.5 | Open Now</p>
                    <Link to="/restaurants/3" className="btn btn-primary">
                      View More
                    </Link>
                  </div>
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
