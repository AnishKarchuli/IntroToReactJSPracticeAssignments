import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-3 flex-grow-1">
        <h1 className="display-2">Stays</h1>
        <section className="mt-2">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1582610116397-edb318620f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Stay 1"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Cozy Cottage Retreat</h5>
                      <p className="card-text">
                        Wake up to a breathtaking view of the Taj Mahal from
                        this luxurious apartment. Explore the rich history and
                        beauty of this iconic monument right from your window.
                      </p>
                      <p className="text-secondary">Last updated 3 mins ago</p>
                      <Link to="/stays/1" className="btn btn-primary">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D"
                      alt=" Stay 2"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Beachfront Paradise Villa</h5>
                      <p className="card-text">
                        Excape to nature with this cozy mountain retreat. Enjoy
                        tranquility and stunning views while being surrounded by
                        lush forests and feash mountain air.
                      </p>
                      <p className="text-secondary">Last updated 10 mins ago</p>
                      <Link to="/stays/2" className="btn btn-primary">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D"
                      alt=" Stay 3"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Urban Loft in the City</h5>
                      <p className="card-text">
                        Indulge in luxury with this stunning seaside villa.
                        Relax on pristine beaches, take a dip in the private
                        pool, and soak up the sun in this exclusive coastal
                        retreat.
                      </p>
                      <p className="text-secondary">Last updated 15 mins ago</p>
                      <Link to="/stays/3" className="btn btn-primary">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1610569244414-5e7453a447a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D"
                      alt=" Stay 4"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Rustic Cabin in the Woods</h5>
                      <p className="card-text">
                        Experience urban living at its finest with this modern
                        loft. Conveniently located in the city center, it offers
                        style, comfort, and easy access to dining and
                        eantertainment options.
                      </p>
                      <p className="text-secondary">Last updated 20 mins ago</p>
                      <Link to="/stays/4" className="btn btn-primary">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
